package com.adorsys.gis.powerpay.powerpaybackend.services;

import com.adorsys.gis.powerpay.powerpaybackend.domain.User;
import com.adorsys.gis.powerpay.powerpaybackend.domain.UserRegistration;
import jakarta.validation.Valid;
import lombok.Getter;
import lombok.Setter;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/registration")
public class userRegistrationController {
    private final UserRegistrationService userRegistrationService;

    public userRegistrationController(UserRegistrationService userRegistrationService) {
        this.userRegistrationService = userRegistrationService;
    }

    @PostMapping
    public ResponseEntity<Object> registerUser(@RequestBody @Valid RegistrationRequest registrationRequest) {
        UserRegistration userRegistration = userRegistrationService.createProcedure(registrationRequest.getPhoneNumber(), registrationRequest.getUserName());
        return new ResponseEntity<>(userRegistration, HttpStatus.CREATED);
    }

    @PostMapping("/{registrationId}")
    public ResponseEntity<Object> completeRegistration(@PathVariable("registrationId") Integer registrationId, @RequestBody @Valid CompletionRequest completionRequest) {
        User user = userRegistrationService.registerUser(registrationId, completionRequest.getPin(), completionRequest.getOtp());
        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }

    // Define request bodies for endpoints
    @Getter
    @Setter
    public
    static class RegistrationRequest {
        private String phoneNumber;
        private String userName;

        
    }
    @Getter
    @Setter
    public
    static class CompletionRequest {
        private String pin;
        private String otp;

    }
}
