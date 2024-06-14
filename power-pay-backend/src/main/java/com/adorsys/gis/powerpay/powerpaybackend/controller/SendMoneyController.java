package com.adorsys.gis.powerpay.powerpaybackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.adorsys.gis.powerpay.powerpaybackend.domain.Transaction;
import com.adorsys.gis.powerpay.powerpaybackend.services.SendMoney;
import com.adorsys.gis.powerpay.powerpaybackend.errorhandling.InsufficientFundsException;

@RestController
@RequestMapping("/api/transaction")
public class SendMoneyController{
    @Autowired
    private final SendMoney sendMoneyService;

    public SendMoneyController(SendMoney sendMoneyService){
        this.sendMoneyService = sendMoneyService;
    }

    @PostMapping()
    public Transaction sendMoney(@RequestBody Transaction request){
        try {
            Transaction transaction = sendMoneyService.send(
                    request.getPhoneNumber(),
                    request.getReceiverPhoneNumber(),
                    request.getAmount(),
                    request.getCurrency(),
                    request.getId()
            );
            return transaction;
        } catch (InsufficientFundsException e) {
            throw new IllegalArgumentException("Insufficient funds", e);
        } catch (Exception e) {
            throw new RuntimeException("Internal server error", e);
        }
    
    }

}