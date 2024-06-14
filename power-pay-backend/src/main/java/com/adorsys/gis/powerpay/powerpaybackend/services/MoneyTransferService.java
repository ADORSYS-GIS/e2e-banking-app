package com.adorsys.gis.powerpay.powerpaybackend.services;

import com.adorsys.gis.powerpay.powerpaybackend.domain.Transaction;
import com.adorsys.gis.powerpay.powerpaybackend.repository.MoneyTransferRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MoneyTransferService {
    private MoneyTransferRepo moneyTransferRepo;

    @Autowired
    public MoneyTransferService(MoneyTransferRepo moneyTransferRepo) {
        this.moneyTransferRepo = moneyTransferRepo;
    }

    public boolean validationMoneyTransfer(String transactionId, String receiverPhoneNumber, Double amount, String currency, String pin) {
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
        transaction.setPin("pin"); // Set a valid pin value here
        return transaction;
    }

    public boolean validationMoneyTransfer(String transactionId, String pin, Double amount, String currency) {
        return validationMoneyTransfer(transactionId, pin, amount, currency, null );
    }
}
