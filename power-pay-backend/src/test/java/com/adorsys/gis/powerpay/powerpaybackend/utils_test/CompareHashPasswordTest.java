package com.adorsys.gis.powerpay.powerpaybackend.utils_test;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.adorsys.gis.powerpay.powerpaybackend.utils.DataSecurityService;


@RunWith(SpringRunner.class)
@SpringBootTest(classes={DataSecurityService.class})
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
