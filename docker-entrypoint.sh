#!/bin/bash

function build(){
	echo "installing dependencies and building app"
	pip install -r requirements.txt
	cd static
	npm install
	npm run build-prod
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

