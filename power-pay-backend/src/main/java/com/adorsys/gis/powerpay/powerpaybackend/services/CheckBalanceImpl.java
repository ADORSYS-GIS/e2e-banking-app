package com.adorsys.gis.powerpay.powerpaybackend.services;

import com.adorsys.gis.powerpay.powerpaybackend.domain.Transaction;
import com.adorsys.gis.powerpay.powerpaybackend.domain.TransactionType;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service //  annotation to ensure classes are recognized as Spring Beans
public class CheckBalanceImpl implements CheckBalance  {
    private final Map<String, List<Transaction>> transactionHistory;

    public CheckBalanceImpl(Map<String, List<Transaction>> transactionHistory){

        this.transactionHistory = new HashMap<>();
        this.transactionHistory.put("user1", Arrays.asList(
                new Transaction(1000.0, TransactionType.DEPOSIT),
                new Transaction(200.0, TransactionType.WITHDRAWAL),
                new Transaction(100.0, TransactionType.DEPOSIT)

        ));

    }
    @Override
    public Double checkBalance(String userId) throws UsernameNotFoundException {
        if (transactionHistory.containsKey(userId)) {
            List<Transaction> transactions = transactionHistory.get(userId);
            double balance = 0.0;
            for (Transaction transaction : transactions) {
                if (transaction.getTransactionType() == TransactionType.DEPOSIT) {
                    balance += transaction.getAmount();
                } else if (transaction.getTransactionType() == TransactionType.WITHDRAWAL) {
                    balance -= transaction.getAmount();
                }
            }
            return balance;
        } else {
            throw new UsernameNotFoundException("User not found");
        }
    }

    
}
