#!/bin/bash

PIDFILE=/var/run/backend.pid

case $1 in
    start)
    	cd /app/
        python server.py &
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
