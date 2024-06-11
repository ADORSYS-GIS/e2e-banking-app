package com.adorsys.gis.powerpay.powerpaybackend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.adorsys.gis.powerpay.powerpaybackend.domain.Transaction;
import com.adorsys.gis.powerpay.powerpaybackend.errorhandling.InsufficientFundsException;

@RestController
@RequestMapping("/api/transaction")
public class SendMoneyController {
    @Autowired
    private SendMoney sendMoneyService;
    public SendMoneyController(SendMoney sendMoneyService){
        this.sendMoneyService = sendMoneyService;
    }

    @PostMapping("/transaction")
    public ResponseEntity<Transaction> sendMoney(@RequestBody Transaction request) {
        try {
            Transaction transaction = sendMoneyService.send(
                    request.getPhoneNumber(),
                    request.getReceiverPhoneNumber(),
                    request.getAmount(),
                    request.getCurrency(),
                    request.getId()
            );
            return ResponseEntity.ok(transaction);
        } catch (InsufficientFundsException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }
}
