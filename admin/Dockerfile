FROM tomcat:8.5.38-jre8
ENV TZ Asia/Shanghai

WORKDIR /usr/local/tomcat

RUN rm -rf /usr/local/tomcat/webapps/admin

COPY ./com-luckyun-bjxjc-ws-admin-3.6.7.war  /usr/local/tomcat/webapps/

EXPOSE 8080

CMD ["catalina.sh", "run"]
