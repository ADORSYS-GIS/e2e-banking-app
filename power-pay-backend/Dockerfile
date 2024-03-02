FROM eclipse-temurin:17

ENV APP_VERSION=0.0.1-SNAPSHOT

COPY target/power-pay-backend-$APP_VERSION.jar app.jar

ENTRYPOINT ["java", "-jar", "app.jar"]
