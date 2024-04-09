package com.adorsys.gis.powerpay.powerpaybackend.utils_test;

import org.junit.jupiter.api.Test;

import com.adorsys.gis.powerpay.powerpaybackend.utils.DataSecurityService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.*;
import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest
public class CompareHashPasswordTest {

    @Autowired
    private DataSecurityService dataSecurityService;

    @Test
    void compareHashPassword(){
        String rawData = "mypin";
        String hashedData = dataSecurityService.hashData(rawData);
        assertTrue(dataSecurityService.compareHashedData(rawData, hashedData));
    }
}
