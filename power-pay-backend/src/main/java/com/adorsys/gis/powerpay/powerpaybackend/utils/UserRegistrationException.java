package com.adorsys.gis.powerpay.powerpaybackend.utils;

public class UserRegistrationException extends RuntimeException {
    public UserRegistrationException(String message, Exception exception) {
        super(message, exception);
    }

    public UserRegistrationException(String userRegistrationNotFound) {
        super(userRegistrationNotFound);
    }
}
