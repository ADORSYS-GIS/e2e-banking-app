package com.adorsys.gis.powerpay.powerpaybackend.services;

import com.adorsys.gis.powerpay.powerpaybackend.domain.User;
import com.adorsys.gis.powerpay.powerpaybackend.domain.UserRegistration;
import jakarta.validation.constraints.NotNull;

public interface UserRegistrationService {

    User registerUser(@NotNull Integer registrationId, String pin, String otp);

    UserRegistration createProcedure(String phoneNumber, String userName);

    boolean findByPhoneNumber(String phoneNumber);
    // UserRegistration findByOpt(String otp);

}
