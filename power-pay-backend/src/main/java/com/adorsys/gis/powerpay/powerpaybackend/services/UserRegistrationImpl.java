package com.adorsys.gis.powerpay.powerpaybackend.services;

import java.security.SecureRandom;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.adorsys.gis.powerpay.powerpaybackend.domain.User;
import com.adorsys.gis.powerpay.powerpaybackend.repository.ProcedureRepository;
import com.adorsys.gis.powerpay.powerpaybackend.repository.UserRepository;
import com.adorsys.gis.powerpay.powerpaybackend.utils.DataSecurityService;
import com.adorsys.gis.powerpay.powerpaybackend.utils.UserRegistrationException;
import com.adorsys.gis.powerpay.powerpaybackend.domain.UserRegistration;


@Service
public class UserRegistrationImpl implements UserRegistrationService {

    @Autowired private UserRepository userRepository;

    @Autowired private User newUser;

    @Autowired private DataSecurityService dataSecurityService;

    @Autowired private UserRegistration userRegistration;

    @Autowired private ProcedureRepository procedureRepository;

    private static final String CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    private static final int OTP_LENGTH = 8;

    @Override
    public int registerUser(String phoneNumber, String userName, String pin) {
        if (phoneNumber == null || userName == null || pin == null) {
            throw new IllegalArgumentException("Invalid input parameters. Please ensure the fields are well filled!");
        }

        UserRegistrationImpl userRegistrationImpl = new UserRegistrationImpl();
        int procedureId = userRegistrationImpl.createProcedure(userName); 

        try {
            newUser.setPhoneNumber(phoneNumber);
            newUser.setUserName(userName);
            newUser.setPin(dataSecurityService.hashData(pin));

            userRepository.save(newUser);
            userRegistration.isDone();
        } catch (Exception e) {
            throw new UserRegistrationException("User registration failed");
        }
        
        return procedureId;
    }

    @Override
    public int createProcedure(String userName){
        UserRegistrationImpl userRegistrationImpl = new UserRegistrationImpl();

        userRegistration.setUserName(userName);
        userRegistration.isWaiting();
        userRegistration.setOpt(dataSecurityService.hashData(userRegistrationImpl.generateOtp()));
        procedureRepository.save(userRegistration);

        return userRegistration.getId();
    }

    @Override
    public String generateOtp() {
        StringBuilder otp = new StringBuilder(OTP_LENGTH);
        SecureRandom secureRandom = new SecureRandom();

        for (int i = 0; i < OTP_LENGTH; i++) {
            int index = secureRandom.nextInt(CHARACTERS.length());
            char character = CHARACTERS.charAt(index);
            otp.append(character);
        }

        return otp.toString();
    }
    
}