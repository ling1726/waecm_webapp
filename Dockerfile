FROM python:2.7.13
MAINTAINER e1027203@student.tuwien.ac.at

RUN curl -sL https://deb.nodesource.com/setup_6.x | bash -
RUN apt update && apt upgrade -y && apt install -y nodejs libmysqlclient-dev debconf-utils


RUN echo 'mysql-server-5.5 mysql-server/root_password password rootpw' | debconf-set-selections
RUN echo 'mysql-server-5.5 mysql-server/root_password_again password rootpw' | debconf-set-selections

RUN apt install -y mysql-server
RUN /usr/bin/mysql_install_db --user=mysql
RUN mkdir -p /var/run/mysqld

COPY . /app

#RUN pip install -r /app/requirements.txt

RUN adduser --disabled-password --gecos "" web
RUN chown -R web:web /app






USER web
WORKDIR /app

#RUN cd static && npm install && npm run build-prod

USER root

CMD /app/startup.sh
#CMD python server.py