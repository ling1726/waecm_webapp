FROM nginx:stable-alpine

RUN apk update && apk add monit

COPY ./monit/monitrc /etc/monit/monitrc
COPY ./monit/nginx.conf /etc/monit/conf.d/
COPY ./nginx-start.sh .
RUN chown -R root:root /etc/monit/
RUN chmod 600 /etc/monit/monitrc

COPY ./docker-entrypoint.sh .
ENTRYPOINT ["./docker-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
