FROM python:2.7.13
MAINTAINER e1027203@student.tuwien.ac.at

RUN curl -sL https://deb.nodesource.com/setup_6.x | bash -
RUN apt-get install -y nodejs 
RUN apt-get install -y monit
COPY . /app

RUN adduser --disabled-password --gecos "" web
RUN chown -R web:web /app

COPY ./monit/monitrc /etc/monit/monitrc
COPY ./monit/app/ /etc/monit/conf.d/
RUN chown -R root:root /etc/monit/
RUN chmod 600 /etc/monit/monitrc


WORKDIR /app

EXPOSE 8080
ENTRYPOINT ["./docker-entrypoint.sh"]
