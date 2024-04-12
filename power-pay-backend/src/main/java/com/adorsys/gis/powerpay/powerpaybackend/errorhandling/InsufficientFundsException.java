package com.adorsys.gis.powerpay.powerpaybackend.errorhandling;

public class InsufficientFundsException extends RuntimeException {

    private final String message;

    public InsufficientFundsException(String message) {
        super(message);
        this.message = message;
    }

    @Override
    public String getMessage() {
        return message;
    }
}