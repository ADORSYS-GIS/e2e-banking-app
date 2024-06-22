package com.adorsys.gis.powerpay.powerpaybackend.domain;
import jakarta.validation.constraints.Digits;
import lombok.Getter;
import lombok.Setter;



@Getter
@Setter
public class SecondRegistrationRequest {
    @Digits(fraction = 0, integer = 5)
    String pin;

    @Digits(fraction = 0, integer = 0)
    String otp;

}