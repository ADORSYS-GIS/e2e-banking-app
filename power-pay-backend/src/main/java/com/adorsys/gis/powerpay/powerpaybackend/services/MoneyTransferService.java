package com.adorsys.gis.powerpay.powerpaybackend.services;

import com.adorsys.gis.powerpay.powerpaybackend.domain.Transaction;
import com.adorsys.gis.powerpay.powerpaybackend.repository.MoneyTransferRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MoneyTransferService implements MoneyTransferInterface {
    private final MoneyTransferRepository moneyTransferRepository;

    @Override
    public void send(String sender, String receiver, Double amount, String currency, Integer pin) {
        if (sender == null || receiver == null || amount == null || currency == null || pin == null) {
            throw new IllegalArgumentException("Invalid input parameters");
        }

        boolean isValid = validationMoneyTransfer(String.valueOf(pin), String.valueOf(pin), receiver, amount, currency);
        if (!isValid) {
            throw new IllegalArgumentException("Money transfer validation failed");
        }

        Transaction transaction = new Transaction();
        transaction.setAmount(amount);
        transaction.setCurrency(currency);
        transaction.setReceiverPhoneNumber(receiver);
        transaction.setPhoneNumber(sender);
        moneyTransferRepository.save(transaction);
    }

    @Override
    public boolean validationMoneyTransfer(String transactionId, String pin, String receiverPhoneNumber, Double amount, String currency) {
        Transaction transaction = retrieveTransactionById(transactionId);
        if (transaction != null) {
            String transactionReceiverPhoneNumber = transaction.getReceiverPhoneNumber();
            return transactionReceiverPhoneNumber.equals(receiverPhoneNumber);
        }
        return false;
    }

    @Override
    public Transaction retrieveTransactionById(String transactionId) {
        // Fetch transaction from repository
        return moneyTransferRepository.findById(transactionId).orElse(null);
    }

    @Override
    public boolean validationMoneyTransfer(String transactionId, String pin, Double amount, String currency) {
        return false;
    }
}