package com.adorsys.gis.powerpay.powerpaybackend.services;

import com.adorsys.gis.powerpay.powerpaybackend.domain.User;
import com.adorsys.gis.powerpay.powerpaybackend.domain.UserRegistration;

public interface UserRegistrationService {

    public User registerUser(String registrationId, String pin, String otp);

    public UserRegistration createProcedure(String phoneNumber, String userName);
    
}
