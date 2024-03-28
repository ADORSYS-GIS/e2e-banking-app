package com.adorsys.gis.powerpay.powerpaybackend.services;

import java.security.SecureRandom;

import org.springframework.stereotype.Service;

import com.adorsys.gis.powerpay.powerpaybackend.domain.User;
import com.adorsys.gis.powerpay.powerpaybackend.domain.UserRegistration;
import com.adorsys.gis.powerpay.powerpaybackend.repository.UserRegistrationRepository;
import com.adorsys.gis.powerpay.powerpaybackend.repository.UserRepository;
import com.adorsys.gis.powerpay.powerpaybackend.utils.DataSecurityService;
import com.adorsys.gis.powerpay.powerpaybackend.utils.UserRegistrationException;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class UserRegistrationServiceImpl implements UserRegistrationService {

    private final UserRegistrationRepository userRegistrationRepository;
    private final UserRepository userRepository;
    private final DataSecurityService dataSecurityService;

    private static final String CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    private static final int OTP_LENGTH = 8;


    @Override
    public User registerUser(@NotNull String registrationId, String pin, String otp) {

        User newUser = new User();
        UserRegistration userRegistration = new UserRegistration();

        try {
            userRepository.save(newUser);
        } catch (Exception e) {
            throw new UserRegistrationException("User registration failed", e);
        }

        return newUser;
    }

    @Override
    public UserRegistration createProcedure(String phoneNumber, String userName) {
        UserRegistration userRegistration = new UserRegistration();

        // generating an otp
        StringBuilder otp = new StringBuilder();
        SecureRandom secureRandom = new SecureRandom();

        for (int i = 0; i < OTP_LENGTH; i++) {
            int index = secureRandom.nextInt(CHARACTERS.length());
            char character = CHARACTERS.charAt(index);
            otp.append(character);
        }

        var otpValue = otp.toString();

        userRegistration.setPhoneNumber(phoneNumber);
        userRegistration.setUserName(userName);
        userRegistration.setOpt(dataSecurityService.hashData(otpValue));
        userRegistrationRepository.save(userRegistration);

        return userRegistration;
    }
}