package com.adorsys.gis.powerpay.powerpaybackend.controller;

import com.adorsys.gis.powerpay.powerpaybackend.domain.FirstRegistrationRequest;
import com.adorsys.gis.powerpay.powerpaybackend.domain.SecondRegistrationRequest;
import com.adorsys.gis.powerpay.powerpaybackend.domain.UserRegistrationResponseBody;
import com.adorsys.gis.powerpay.powerpaybackend.services.UserRegistrationServiceImpl;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;


import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/registration")
public class UserRegistrationController {
    
    private final UserRegistrationServiceImpl userRegistrationService;

    @PostMapping
    @ResponseBody
    public UserRegistrationResponseBody postResponse(@RequestBody @Valid FirstRegistrationRequest registrationRequest) {

        boolean userExist = userRegistrationService.findByPhoneNumber(registrationRequest.getPhoneNumber());
        if (userExist) {
        return new UserRegistrationResponseBody("Pnone number has already been taken");
        }else {
            userRegistrationService.createProcedure(registrationRequest.getPhoneNumber(), registrationRequest.getUserName());

        return new UserRegistrationResponseBody("User name and phone number has been succesfull recieved now send the otp you recived and your pin code to complete registration");
    }
    
}

    @PostMapping("/{registrationId}")
    @ResponseBody
    public UserRegistrationResponseBody completeRegistration(@PathVariable("registrationId") Integer registrationId, @RequestBody @Valid SecondRegistrationRequest completionRequest) {
        userRegistrationService.registerUser(registrationId, completionRequest.getPin(), completionRequest.getOtp());
        return new UserRegistrationResponseBody("You have succesfully been registered to the powerpay application");
    }

    
}
