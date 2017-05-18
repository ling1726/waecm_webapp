#!/bin/bash

PIDFILE=/var/run/nginx.pid

case $1 in
    start)
    	nginx -g daemon off&
        echo $! > ${PIDFILE};
    ;;
    stop)
        kill `cat ${PIDFILE}`
        rm ${PIDFILE}
    ;;
    *)
        echo "usage: nginx.sh {start|stop}" ;;
esac
exit 0
