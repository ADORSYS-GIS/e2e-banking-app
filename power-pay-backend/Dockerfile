FROM eclipse-temurin:21-jdk as builder

WORKDIR /app

COPY . .

RUN ./mvnw clean package


FROM eclipse-temurin:21-jre-alpine

LABEL maintainer="PowerPay Team <gis-udm@adorsys.com>"
LABEL application="power-pay-backend"

ENV APP_VERSION=0.0.1-SNAPSHOT

COPY --from=builder /app/target/power-pay-backend-${APP_VERSION}.jar /app/app.jar


ENTRYPOINT ["java", "-jar", "/app/app.jar"]
