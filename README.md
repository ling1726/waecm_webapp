# waecm_webapp

## Deployment
From the root of the proejct run the following command to build the project:
> $ (sudo) docker build -t waecm-bsp1 .

The following command starts the container and installs dependencies
> $ (sudo) docker run -p 8080:8080 waecm-bsp1 build

It can also be chained with the ``deploy`` option to start the application
> $ (sudo) docker run -p 8080:8080 waecm-bsp1 build deploy

Or ``deploy`` can simply be used on its own
> $ (sudo) docker rum -p 8080:8080 waecm-bsp1 deploy

The ``-p 8080:8080`` option allows docker to forward requests through localhost
where the app can be reached by the url ``http://localhost:8080``

without ``-p 8080:8080`` the user must use docker to find and use the ip address of the container

## Architecture & Design
The following app is consists of:

- Python flask server (backend)
- ReactJS front end usig Redux architecture
- MySQL Database

### Backend
#### API Server
The backend consists of an API server which provides services to the front end client e.g:

> http://localhost:8080/api/counter

#### Authentication
The app uses JWT authentication

The authentication service is not considered a part of the API and can be reached through the root path:

> http://localhost:8080/auth
A post request that is successfully authenticated to the above address will return a valid JWT token

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


