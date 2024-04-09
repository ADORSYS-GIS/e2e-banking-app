FROM eclipse-temurin:21-jre-alpine

LABEL maintainer="PowerPay Team <gis-udm@adorsys.com>"
LABEL application="power-pay-backend"

ENV APP_VERSION=0.0.1-SNAPSHOT

COPY ./target/power-pay-backend-${APP_VERSION}.jar /app/app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "/app/app.jar"]
