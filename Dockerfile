FROM python:2.7.13
MAINTAINER e1027203@student.tuwien.ac.at

RUN apt update && apt upgrade -y && apt install -y nodejs libmysqlclient-dev
RUN echo 'mysql-server mysql-server/root_password password rootpw' | debconf-set-selections
RUN echo 'mysql-server mysql-server/root_password_again password rootpw' | debconf-set-selections

RUN apt install -y mysql-server

COPY . /app

RUN addgroup web ; \
      adduser --ingroup web web && exit 0 ; exit 1
RUN chown -R web:web /app

RUN pip install -r /app/requirements.txt

RUN /usr/bin/mysql_install_db --user=mysql
RUN mkdir -p /var/run/mysqld
RUN service mysql start && sleep 5
RUN mysqladmin -u root password rootpw
RUN mysqladmin create waecm

RUN echo "GRANT ALL PRIVILEGES ON waecm.* To 'waecmuser'@'localhost' IDENTIFIED BY 'waecmpassword';" | mysql -u root -p rootpw


USER web
WORKDIR /app

RUN cd static && npm install && npm run build-prod



CMD python server.py
