#!/bin/bash

if [ "$1" = deploy ]; then
    exec monit -I -v	
fi

if [ "$1" = dev ]; then
    /usr/sbin/mysqld --bind-address="0.0.0.0" --verbose --init-file="/startup.sql"
fi
