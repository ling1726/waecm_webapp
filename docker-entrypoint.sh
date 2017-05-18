#!/bin/bash
export DEV=false

su web
if [ "$APPSERVER" = "1" ]
then
    echo "set httpd port 3001 and" >> /etc/monit/monitrc
    echo "allow 0.0.0.0/0.0.0.0" >> /etc/monit/monitrc
fi

if [ "$APPSERVER" = "2" ]
then
    echo "set httpd port 3002 and" >> /etc/monit/monitrc
    echo "allow 0.0.0.0/0.0.0.0" >> /etc/monit/monitrc
fi


function build(){
	echo "installing dependencies and building app"
	pip install -r requirements.txt
	cd static
	npm install
	npm run build-prod
	cd ..
}

function build_dev(){
	echo "installing dependencies and building app for development"
	pip install -r requirements.txt
	cd static
	npm install 
	npm run build-dev
	npm run watch-dev&
	cd ..

}
function deploy(){
	echo "run app"
    killall monit
	exec monit -I -v
}

if [ "$1" = "build" ]; then
	build
	if [ "$2" = "deploy" ]; then
		deploy
	fi
fi

if [ "$1" = "deploy" ]; then
	build
	deploy
fi

if [ "$1" = "dev" ]; then
    export DEV=true
	build_dev
    echo "running dev server"
    python server.py
fi



