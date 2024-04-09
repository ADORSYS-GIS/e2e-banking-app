package com.adorsys.gis.powerpay.powerpaybackend.services;

import com.adorsys.gis.powerpay.powerpaybackend.domain.User;
import com.adorsys.gis.powerpay.powerpaybackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/api/balance")
public class CheckBalanceController {
    @Autowired
    private final CheckBalance checkBalanceService;
    private final UserRepository userRepository;

    @Autowired
    public CheckBalanceController(CheckBalance checkBalanceService,UserRepository userRepository){
        this.checkBalanceService = checkBalanceService;
        this.userRepository = userRepository;
    }

    @GetMapping("/{userId}")
    public ResponseEntity<String> checkBalance(@PathVariable String userId){
        Optional<User> user = userRepository.findByUserId(userId);
        if(user.isPresent()){
            Double balance = checkBalanceService.checkBalance(userId);
            return ResponseEntity.ok("Balance for user ID" + " : " +balance);
        }
        else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }
        }
    }


