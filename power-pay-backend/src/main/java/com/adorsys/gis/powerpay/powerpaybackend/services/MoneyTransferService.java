package com.adorsys.gis.powerpay.powerpaybackend.services;

public class MoneyTransferService {
    public boolean validationMoneyTransfer(String transactionId, String senderAccoundId, String recieveAccountId, String pin) {
        Transaction transaction = retrieveTransactionById(transactionId);

        if (transaction != null) {
            String transactionPin = transaction.getPin();
            if (transactionPin != null && transactionPin.equals(pin)) {
                return true;
            } else {
                return false;
            }
        }
        return false;
    }

    public Transaction retrieveTransactionById(String transactionId) {
        Transaction transaction = new Transaction();
        transaction.setTransactionId(transactionId);
        transaction.setPin("1234"); // Set a valid pin value here
        return transaction;
    }

    public boolean validationMoneyTransfer(String transactionId, String pin) {
        return validationMoneyTransfer(transactionId, pin);
    }
}
