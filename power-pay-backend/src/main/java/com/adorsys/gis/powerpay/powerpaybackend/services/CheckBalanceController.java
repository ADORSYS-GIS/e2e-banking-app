package com.adorsys.gis.powerpay.powerpaybackend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/balance")
public class CheckBalanceController {
    @Autowired
    private final CheckBalance checkBalanceService;

    public CheckBalanceController(CheckBalance checkBalanceService){
        this.checkBalanceService = checkBalanceService;
    }

    @GetMapping("/{userId}")
    public ResponseEntity<String> checkBalance(@PathVariable String userId){
        try{
            Double balance = checkBalanceService.checkBalance(userId);
            return ResponseEntity.ok("Balance for user ID" + userId + ": " + balance);
        } catch (UsernameNotFoundException e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }
    }
}
