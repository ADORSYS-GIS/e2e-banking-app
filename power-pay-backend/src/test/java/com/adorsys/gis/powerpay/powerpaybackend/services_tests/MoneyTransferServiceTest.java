package com.adorsys.gis.powerpay.powerpaybackend.services_tests;

import com.adorsys.gis.powerpay.powerpaybackend.services.MoneyTransferService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class MoneyTransferServiceTest {

    @Autowired
    private MoneyTransferService moneyTransferService;

    @Test
    public void moneyTransferTest() {

        String transactionId = "transactionId";
        String pin = "pin";
        Double amount = 100.00;
        String currency = "currency";
        boolean isValid = moneyTransferService.validationMoneyTransfer(transactionId, pin, amount, currency );
        Assertions.assertFalse(isValid);
    }

    @Test
    public void moneyTransferExceptionTest() {

        String transactionId = "transactionId";
        String pin = "pin";
        Double amount = 100.00;
        String currency = "currency";
        boolean isValid = moneyTransferService.validationMoneyTransfer(transactionId, pin, amount, currency);
        Assertions.assertFalse(isValid);
    }

    @Test
    public void testInvalidMoneyTransferInvalidPin() {

        String transactionId = "transactionId";
        String pin = "pin";
        Double amount = 100.00;
        String currency = "currency";

        boolean isValid = moneyTransferService.validationMoneyTransfer(transactionId, pin, amount,currency);
        Assertions.assertFalse(isValid);
    }
}