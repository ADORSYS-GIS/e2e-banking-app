package com.adorsys.gis.powerpay.powerpaybackend.services;

import java.security.SecureRandom;

import org.springframework.stereotype.Service;

import com.adorsys.gis.powerpay.powerpaybackend.domain.User;
import com.adorsys.gis.powerpay.powerpaybackend.domain.UserRegistration;
import com.adorsys.gis.powerpay.powerpaybackend.repository.ProcedureRepository;
import com.adorsys.gis.powerpay.powerpaybackend.repository.UserRepository;
import com.adorsys.gis.powerpay.powerpaybackend.utils.DataSecurityService;
import com.adorsys.gis.powerpay.powerpaybackend.utils.UserRegistrationException;

@Service
public class UserRegistrationServiceImpl implements UserRegistrationService {

    private final UserRepository userRepository;
    private final ProcedureRepository procedureRepository;
    private final DataSecurityService dataSecurityService;

    private static final String CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    private static final int OTP_LENGTH = 8;


    public UserRegistrationServiceImpl(UserRepository userRepository, ProcedureRepository procedureRepository, 
        DataSecurityService dataSecurityService) {
        this.userRepository = userRepository;
        this.procedureRepository = procedureRepository;
        this.dataSecurityService = dataSecurityService;
    }

    @Override
    public int registerUser(String phoneNumber, String userName, String pin) {
        validateInputParameters(phoneNumber, userName, pin);

        int procedureId = createProcedure(userName);

        try {
            User newUser = new User();
            UserRegistration userRegistration = new UserRegistration();

            newUser.setPhoneNumber(phoneNumber);
            newUser.setUserName(userName);
            newUser.setPin(dataSecurityService.hashData(pin));

            userRepository.save(newUser);
            userRegistration.isDone();
        } catch (Exception e) {
            throw new UserRegistrationException("User registration failed", e);
        }

        return procedureId;
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
        userRegistration.isWaiting();
        userRegistration.setOpt(dataSecurityService.hashData(generateOtp()));

        procedureRepository.save(userRegistration);
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