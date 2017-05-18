# waecm_webapp

## Deployment
From the root of the project run the following command to remove any ophan containers from the last exercises:
> $ (sudo) docker-compose down

From the root of the proejct run the following command to build the project:
> $ (sudo) docker-compose up --build

This command will build the required containers and deploy them with the proper configuration.

Upon successful build. complete deployment of all containers should take between 2-5 minutes due to the build restrictions placed in the specifications (project dependencies have to be 
installed during execution). Another factor contributing to the slightly slower build is the fact that one of the appservers will die on startup (due to database conflict issues) and 
be restarted by Monit.

here are the available resources

1. application - `https://localhost:8080`
2. dashboard - `http://localhost:5000`

Our Monit tool will periodically return messages on the status of our appservers and db server.

## Architecture & Design
The following app is consists of:

- Python flask server running under gevent to accomodate WebSocket API(backend)
- ReactJS front end usig Redux architecture
- MySQL Database

### System
- Two application containers `appserver1` and `appserver2`
- One MySQL database container `db`
- One Monitoring container `monitoring` which is reponsible for displaying the health dashboard of the application containers
- One Nginx container that will be our load balancer and reverse proxy

#### Application containers
The application containers run our application servers, from a systems point of view they offer an important service `/api/healthcheck`,
which reports their:

- status
- cpu usage
- memory usage
- uptime

Each application server is managed by the Monit tool, which is responsible for delivering system information such as the healthcheck. Monit
is also responsible for starting the application in the event that it is stopped.

#### MySQL container
The MySQL container is also managed by Monit, which is reponsible for keeping the service up and running.

#### Monitoring container
The monitoring container contains a dashboard which pulls health information from the application servers through their respective APIs.
The dashboard is available from `http://localhost:5000`

#### Nginx container
Nginx serves the role as a load balancer and a reverse proxy. If one appserver dies or is interrupted all subsequent traffic will be directed to 
the second one.

### Testing Monitoring tool restart
Our monitoring tool Monit is available in our appserver containers and our database container. To test that the restarts our working:

1. run `$ docker ps` to list the ids of the running containers
2. for the chosen container run `$ docker exec -it <container-id> bash`, this opens a shell into the container
3. run `$ ps -e` to find the list of pids
4. for the database container the corresponding process will be `mysqld` and for the appserver containers the corresponding process will be `python`
5. run the appropriate `$ kill -9 <pid>` command to kill the process
6. keep and eye on the docker log output (which should be running in another terminal) and watch as the service restarts
7. additionally you should at some point see a restarted process through `$ ps -e` in the container shell
8. Updated container status should be available throught the monitoring dashboard, but beware of the delay due to the latency of the docker network

The restart process should take about 1-2 minutes. The monit daemon will first attempt to stop the process in case of malfunction (which should fail if the process has already terminated)
and clean up some zombie data e.g. freeing up used sockets. After the stop the process is then started again.

### Backend
#### API Server
The backend consists of an API server which provides services to the front end client e.g:

> https://localhost:8080/api/user

#### Authentication
The app uses JWT authentication

The authentication service is not considered a part of the API and can be reached through the root path:

> https://localhost:8080/auth

A post request that is successfully authenticated to the above address will return a valid JWT token

The JWT token must be sent as an authorization header **with the JWT prefix and NOT the Bearer prefix** with requests to protected routes
> {Authorization: JWT xxxxxxxxxxxxxxxxx}

#### Test user login
There are three test users available:

- username, password, mTAN auth
- maxmustermann@gmail.com, maxmustermann, 1001
- gabimusterfrau@gmail.com, gabimusterfrau, 1002
- erikatest@gmail.com, erikatest, 1003


### Frontend
The frontend is a ReactJS client using Redux architecture. Styling is handled by the materialize library.
Source code can be found under ``/static/src`` and production bundled files under ``/static/prod``

The frontend client is implemented using ES2015/ES6 and built using webpack and babel

## Developer's guide 
### docker - start database
Requirements: docker, docker-compose

Command to start: ``$ docker-compose up``  
Run in background: ``$ docker-compose up -d``  
stop and remove container: ``$ docker-compose down``

### install back end dependencies
> $ (sudo) apt-get install libmysqlclient-dev
> $ (sudo) pip install -r requirements.txt

### start python backend server
> $ python server.py

### install frontend dependencies
> $ npm install

### build front end for each respective environment

> $ npm run build-dev
> $ npm run buid-prod

### start fromt end development server
>$ node server


