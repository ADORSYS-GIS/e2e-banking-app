package com.adorsys.gis.powerpay.powerpaybackend.services;

public interface UserRegistrationService {
    
    public int registerUser(String phoneNumber, String userName, String pin);

    public int createProcedure(String userName);

    public String generateOtp();
}
