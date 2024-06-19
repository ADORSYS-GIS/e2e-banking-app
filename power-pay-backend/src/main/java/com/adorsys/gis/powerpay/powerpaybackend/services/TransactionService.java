package com.adorsys.gis.powerpay.powerpaybackend.services;

import com.adorsys.gis.powerpay.powerpaybackend.domain.Transaction;
import com.adorsys.gis.powerpay.powerpaybackend.repository.TransactionRepository;

public class TransactionService {
    private final MoneyTransferInterface moneyTransferInterface;
    private final TransactionRepository transactionRepository;

    public TransactionService(MoneyTransferInterface moneyTransferInterface, TransactionRepository transactionRepository) {
        this.moneyTransferInterface = moneyTransferInterface;
        this.transactionRepository = transactionRepository;
    }

    public String sendMoneyTransfer(Double amount, String receiverPhoneNumber, String currency, String pin, String transactionId) {
        boolean isValid = moneyTransferInterface.validationMoneyTransfer(transactionId, pin, amount, currency);
        if (!isValid) {
            return "Invalid transaction or pin.";
        }

        Transaction transaction = new Transaction();
        transaction.setAmount(amount);
        transaction.setCurrency(currency);
        transaction.setReceiverPhoneNumber(receiverPhoneNumber);
        transactionRepository.save(transaction);

        // Call the send method from MoneyTransferInterface
        moneyTransferInterface.send(null, receiverPhoneNumber, amount, currency, Integer.parseInt(pin));

        return "Transaction successfully sent!";
    }
}

