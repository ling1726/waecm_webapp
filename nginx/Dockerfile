FROM nginx:stable-alpine
MAINTAINER stanek@gmx.at


RUN apk update && apk add monit


COPY ./monit/monitrc /etc/monitrc
COPY ./monit/nginx.conf /etc/monit/conf.d/
RUN chown -R root:root /etc/monit/
RUN chmod 600 /etc/monitrc
RUN mkdir -p /var/lib/monit/

CMD monit -I -v
