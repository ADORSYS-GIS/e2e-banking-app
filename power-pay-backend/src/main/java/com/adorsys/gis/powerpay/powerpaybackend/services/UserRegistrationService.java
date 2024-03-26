package com.adorsys.gis.powerpay.powerpaybackend.services;

import com.adorsys.gis.powerpay.powerpaybackend.domain.User;

public interface UserRegistrationService {

    public User registerUser(String phoneNumber, String userName, String pin);

    public int createProcedure(String userName);

    public String generateOtp();
}
