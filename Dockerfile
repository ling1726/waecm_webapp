FROM python:2.7.13
MAINTAINER e1027203@student.tuwien.ac.at

RUN curl -sL https://deb.nodesource.com/setup_6.x | bash -
RUN apt update && apt upgrade -y && apt install -y nodejs

RUN apt update && apt upgrade -y && apt install -y monit

COPY . /app

RUN adduser --disabled-password --gecos "" web
RUN chown -R web:web /app


WORKDIR /app

EXPOSE 8080
ENTRYPOINT ["./docker-entrypoint.sh"]
