#!/bin/bash


service mysql start && sleep 15oc
mysqladmin --user=root --password=rootpw create waecm
echo "GRANT ALL PRIVILEGES ON waecm.* To 'waecmuser'@'localhost' IDENTIFIED BY 'waecmpassword';" | mysql -u root --password=rootpw

su web

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
	python server.py
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
	deploy
fi

