package com.adorsys.gis.powerpay.powerpaybackend.controller;

import com.adorsys.gis.powerpay.powerpaybackend.domain.FirstRegistrationRequest;
import com.adorsys.gis.powerpay.powerpaybackend.domain.SecondRegistrationRequest;
import com.adorsys.gis.powerpay.powerpaybackend.services.UserRegistrationService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/registration")
public class UserRegistrationController {
    
    private final UserRegistrationService userRegistrationService;


    @PostMapping
    public ResponseEntity<Object> registerUser(@RequestBody @Valid FirstRegistrationRequest registrationRequest) {
        userRegistrationService.createProcedure(registrationRequest.getPhoneNumber(), registrationRequest.getUserName());
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @PostMapping("/{registrationId}")
    public ResponseEntity<Object> completeRegistration(@PathVariable("registrationId") Integer registrationId, @RequestBody @Valid SecondRegistrationRequest completionRequest) {
        userRegistrationService.registerUser(registrationId, completionRequest.getPin(), completionRequest.getOtp());
        return ResponseEntity.ok(HttpStatus.CREATED);
    }

    
}
