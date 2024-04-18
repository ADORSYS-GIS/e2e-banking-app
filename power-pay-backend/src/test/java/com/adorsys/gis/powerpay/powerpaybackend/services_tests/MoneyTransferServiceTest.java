package com.adorsys.gis.powerpay.powerpaybackend.services_tests;

import com.adorsys.gis.powerpay.powerpaybackend.services.MoneyTransferService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
public class MoneyTransferServiceTest {
    @Test
    public void moneyTransferTest() {
        MoneyTransferService Service = new MoneyTransferService();
        String transactionId = "transactionId";
        String pin = "pin";
        String recipientAccountId = "recipientAccountId";
        String senderAccountId = "senderAccountId";

        boolean isValid = Service.validationMoneyTransfer(transactionId, pin, recipientAccountId, senderAccountId);
        Assertions.assertFalse(isValid);
    }

    @Test
    public void moneyTransferExceptionTest() {
        MoneyTransferService Service = new MoneyTransferService();
        String transactionId = "transactionId";
        String pin = "pin";
        String recipientAccountId = "recipientAccountId";
        String senderAccountId = "senderAccountId";

        boolean isValid = Service.validationMoneyTransfer(transactionId, pin, senderAccountId, recipientAccountId );
        Assertions.assertFalse(isValid);
    }

    @Test
    public void testInvalidMoneyTransferInvalidPin() {
        MoneyTransferService Service = new MoneyTransferService();
        String transactionId = "transactionId";
        String pin = "pin";
        String recipientAccountId = "recipientAccountId";
        String senderAccountId = "senderAccountId";

        boolean isValid = Service.validationMoneyTransfer(transactionId, pin, recipientAccountId, senderAccountId );
        Assertions.assertFalse(isValid);
    }
}