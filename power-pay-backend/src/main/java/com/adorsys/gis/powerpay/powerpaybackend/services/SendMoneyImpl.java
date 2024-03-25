package com.adorsys.gis.powerpay.powerpaybackend.services;
import com.adorsys.gis.powerpay.powerpaybackend.domain.ProcedureStatus;
import com.adorsys.gis.powerpay.powerpaybackend.domain.Transaction;
import com.adorsys.gis.powerpay.powerpaybackend.errorhandling.InsufficientFundsException;
import com.adorsys.gis.powerpay.powerpaybackend.repository.MoneyTranferRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.TransactionException;

@Service
public class SendMoneyImpl implements SendMoney{

    @Autowired
    private MoneyTranferRepository moneyTranferRepository;

    @Autowired
    private Transaction transaction;


    @Override
    public Transaction send(String phoneNumber, String receiverPhoneNumber, Double amount, String currency, Integer id)
            throws InsufficientFundsException, TransactionException {
        if (phoneNumber == null) {
            throw new IllegalArgumentException("Phone number cannot be null.");
        }
        if (amount <= 0) {
            throw new IllegalArgumentException("Transfer amount must be positive.");
        }

        if (!hasSufficientFunds(phoneNumber, amount)) {
            throw new InsufficientFundsException("Insufficient funds for transfer.");
        }

        try {
            if (transaction != null) {
                transaction.setReceiverPhoneNumber(receiverPhoneNumber);
                transaction.setAmount(amount);
                transaction.setCurrency(currency);
                transaction.setStatus(ProcedureStatus.WAITING);
                transaction.setId(id);
                transaction.setPhoneNumber(phoneNumber);
        
                transaction = moneyTranferRepository.save(transaction);
            }
        } catch (Exception e) {
            throw new TransactionException("Failed to save transaction: " + e.getMessage(), e) {
            };
        }

        return transaction;
    }

    private boolean hasSufficientFunds(String phoneNumber, Double amount) {
        return true;
    }

}