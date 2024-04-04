package com.adorsys.gis.powerpay.powerpaybackend.services;

import com.adorsys.gis.powerpay.powerpaybackend.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service //  annotation to ensure classes are recognized as Spring Beans
public class CheckBalanceImpl implements CheckBalance  {
    private final TransactionRepository transactionRepository;

    @Autowired
    public CheckBalanceImpl(TransactionRepository transactionRepository){

        this.transactionRepository = transactionRepository;
    }

    @Override
    public Double checkBalance(String phoneNumber) throws UsernameNotFoundException{
        Double balance = transactionRepository.calculateBalaceByPhoneNumber(phoneNumber);
        return  balance != null ? balance : 0.0;
    }
}

