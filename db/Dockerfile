FROM debian:jessie

RUN apt-get update && apt-get install debconf-utils
ENV DEBIAN_FRONTEND="noninteractive"

ENV MYSQL_VERSION 5.5
RUN apt-get update && apt-get install -y mysql-server-${MYSQL_VERSION}

RUN apt-get update && apt-get install -y monit


COPY ./monit/monitrc /etc/monit/monitrc
COPY ./monit/mysql.conf /etc/monit/conf.d/
COPY ./db-start.sh .
RUN chown -R root:root /etc/monit/
RUN chmod 600 /etc/monit/monitrc

COPY ./docker-entrypoint.sh .
COPY ./startup.sql .
ENTRYPOINT ["./docker-entrypoint.sh"]

EXPOSE 3306
