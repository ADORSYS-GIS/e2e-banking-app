package com.adorsys.gis.powerpay.powerpaybackend.errorhandling;

import com.adorsys.gis.powerpay.powerpaybackend.services.Transaction;

import java.util.HashMap;
import java.util.Map;

public class TransactionRepository {
    private Map<String, Transaction> transactions;

    public TransactionRepository() {
        transactions = new HashMap<>();
    }

    public void add(Transaction transaction) {
        transactions.put(transaction.getTransactionId(), transaction);
    }

    public Transaction getTransaction(String transactionId) {
        return transactions.get(transactionId);
    }
}
