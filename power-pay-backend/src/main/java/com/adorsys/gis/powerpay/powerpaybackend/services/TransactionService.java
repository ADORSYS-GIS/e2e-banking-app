package com.adorsys.gis.powerpay.powerpaybackend.services;

import com.adorsys.gis.powerpay.powerpaybackend.repository.MoneyTransferRepo;
import com.adorsys.gis.powerpay.powerpaybackend.repository.TransactionRepository;

public class TransactionService {
    private MoneyTransferRepo moneyTransferRepo;
    private MoneyTransferService moneyTransferService;

    public TransactionService(TransactionRepository transactionRepository) {
        this.moneyTransferRepo = moneyTransferRepo;
        this.moneyTransferService = new MoneyTransferService(moneyTransferRepo);
    }

    public String sendMoneyTransfer(String transactionId, String pin, Double amount, String receiverPhoneNumber, String currency) {
        boolean isValid = moneyTransferService.validationMoneyTransfer(transactionId, pin, amount, receiverPhoneNumber, currency);
        if (!isValid) {
            return "Invalid transaction or pin.";
        }
        return "Transaction successfully sent!";
    }
}