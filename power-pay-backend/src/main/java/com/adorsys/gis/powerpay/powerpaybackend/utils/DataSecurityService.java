package com.adorsys.gis.powerpay.powerpaybackend.utils;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

import com.adorsys.gis.powerpay.powerpaybackend.domain.User;
import com.adorsys.gis.powerpay.powerpaybackend.repository.UserRepository;

@Component
public class DataSecurityService {

    private static final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    private UserRepository userRepository;

    public String hashData(String data) {
        return passwordEncoder.encode(data);
    }

    public boolean compareHashPassword(String pin, String phoneNumber) {
        User user = userRepository.findById(phoneNumber).get();
        String hashPin = user.getPin();
        boolean result = passwordEncoder.matches(pin, hashPin);
        return result;
    }
}
