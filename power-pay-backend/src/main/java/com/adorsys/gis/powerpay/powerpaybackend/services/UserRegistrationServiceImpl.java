package com.adorsys.gis.powerpay.powerpaybackend.services;

import java.security.SecureRandom;

import org.springframework.stereotype.Service;

import com.adorsys.gis.powerpay.powerpaybackend.domain.User;
import com.adorsys.gis.powerpay.powerpaybackend.domain.UserRegistration;
import com.adorsys.gis.powerpay.powerpaybackend.repository.UserRegistrationRepository;
import com.adorsys.gis.powerpay.powerpaybackend.repository.UserRepository;
import com.adorsys.gis.powerpay.powerpaybackend.utils.DataSecurityService;
import com.adorsys.gis.powerpay.powerpaybackend.utils.UserRegistrationException;

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
    public User registerUser(String phoneNumber, String userName, String pin) {
        validateInputParameters(phoneNumber, userName, pin);

        User newUser = new User();
        UserRegistration userRegistration = new UserRegistration();
        createProcedure(userName);

        try {
            newUser.setPhoneNumber(phoneNumber);
            newUser.setUserName(userName);
            newUser.setPin(dataSecurityService.hashData(pin));

            userRepository.save(newUser);
            userRegistration.isDone();
        } catch (Exception e) {
            throw new UserRegistrationException("User registration failed", e);
        }

        return newUser;
    }

    private void validateInputParameters(String phoneNumber, String userName, String pin) {
        if (phoneNumber == null || userName == null || pin == null) {
            throw new IllegalArgumentException("Invalid input parameters. Please ensure all fields are filled.");
        }
    }


    @Override
    public int createProcedure(String userName) {
        UserRegistration userRegistration = new UserRegistration();
        userRegistration.setUserName(userName);
        if(userRegistration != null){
            String otp = generateOtp();
            String hashedOtp = dataSecurityService.hashData(otp);
            userRegistration.setOpt(hashedOtp);
            userRegistrationRepository.save(userRegistration);
        }
        return userRegistration.getId();
    }

    @Override
    public String generateOtp() {
        StringBuilder otp = new StringBuilder();
        SecureRandom secureRandom = new SecureRandom();

        for (int i = 0; i < OTP_LENGTH; i++) {
            int index = secureRandom.nextInt(CHARACTERS.length());
            char character = CHARACTERS.charAt(index);
            otp.append(character);
        }

        return otp.toString();

    }
}