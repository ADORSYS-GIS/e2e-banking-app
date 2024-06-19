package com.adorsys.gis.powerpay.powerpaybackend.services;

import com.adorsys.gis.powerpay.powerpaybackend.domain.Transaction;

public interface MoneyTransferInterface {
    boolean validationMoneyTransfer(String transactionId, String pin, String receiverPhoneNumber, Double amount, String currency);
    Transaction retrieveTransactionById(String transactionId);
    boolean validationMoneyTransfer(String transactionId, String pin, Double amount, String currency);
    void send(String sender, String receiver, Double amount, String currency, Integer pin);
}
