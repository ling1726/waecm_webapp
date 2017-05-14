#!/bin/bash

PIDFILE=/var/run/mysqld.pid

case $1 in
    start)
        /usr/sbin/mysqld --bind-address="0.0.0.0" --verbose --init-file="/startup.sql" &
        echo $! > ${PIDFILE};
    ;;
    stop)
        kill `cat ${PIDFILE}`
        rm ${PIDFILE}
    ;;
    *)
        echo "usage: backend.sh {start|stop}" ;;
esac
exit 0
