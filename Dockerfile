FROM python:2.7.13-alpine
MAINTAINER e1027203@student.tuwien.ac.at

RUN sudo 

RUN apk update && apk upgrade && apk add nodejs

COPY . /app

RUN addgroup -S web ; \
      adduser -D -S -G web web && exit 0 ; exit 1
RUN chown -R web:web /app

RUN pip install flask sqlalchemy pymysql

USER web
WORKDIR /app

RUN cd static && npm install && npm run build


CMD python server.py
