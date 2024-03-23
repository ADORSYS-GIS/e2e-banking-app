package com.adorsys.gis.powerpay.powerpaybackend.services_tests;

import com.adorsys.gis.powerpay.powerpaybackend.domain.Transaction;
import com.adorsys.gis.powerpay.powerpaybackend.domain.TransactionType;
import com.adorsys.gis.powerpay.powerpaybackend.services.CheckBalanceImpl;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class CheckBalanceTest {

    private CheckBalanceImpl checkBalanceService;

    @BeforeEach
    public  void setup(){
        Map<String, List<Transaction>> transactionHistory = new HashMap<>();
        transactionHistory.put("user1", Arrays.asList(
                new Transaction(1000.0, TransactionType.DEPOSIT),
                new Transaction(200.0, TransactionType.WITHDRAWAL),
                new Transaction(100.0, TransactionType.DEPOSIT)
        ));

        checkBalanceService = new CheckBalanceImpl(transactionHistory);
    }
    @Test
    public void testCheckBalanceWithValidUser() throws UsernameNotFoundException {
        String userId = "user1";
        double expectedBalance = 900.0;
        double actualBalance = checkBalanceService.checkBalance(userId);
        System.out.println("Actual Balance: " + actualBalance);
        Assertions.assertEquals(expectedBalance, actualBalance);

    }

    @Test
    public void testCheckBalanceWithInvalidUser(){
        String userId = "user2";
        Assertions.assertThrows(UsernameNotFoundException.class, () -> {
            checkBalanceService.checkBalance(userId);
        });

        }
}
