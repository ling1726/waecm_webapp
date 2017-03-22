# waecm_webapp
Web application developed for waecm class


## docker - start database
Requirements: docker, docker-compose

Command to start: ``$ docker-compose up``  
Run in background: ``$ docker-compose up -d``  
stop and remove container: ``$ docker-compose down``

## install back end dependencies
$ (sudo) apt-get install libmysqlclient-dev
$ (sudo) pip install -r requirements.txt

## start python backend server
$ python server.py

## install frontend dependencies
$ npm install

## build front end
# for each environment

$ npm run build-dev
$ npm run buid-prod

## start fromt end development server
$ node server


