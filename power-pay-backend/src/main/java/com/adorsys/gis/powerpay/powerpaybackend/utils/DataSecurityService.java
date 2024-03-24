package com.adorsys.gis.powerpay.powerpaybackend.utils;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class DataSecurityService {

    private static final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    //Method to hash Data
    public String hashData(String data) {
        return passwordEncoder.encode(data);
    }

    //Method to compare a given String with hashed value
    public boolean compareHashedData(String data, String hashedData) {
        hashedData = hashData(data);
        boolean result = passwordEncoder.matches(data, hashedData);
        return result;
    }
}
