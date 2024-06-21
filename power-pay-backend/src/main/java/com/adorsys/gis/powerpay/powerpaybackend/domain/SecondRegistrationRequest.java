package com.adorsys.gis.powerpay.powerpaybackend.domain;
import lombok.Getter;
import lombok.Setter;



@Getter
@Setter
public class SecondRegistrationRequest {
    String pin;
    String otp;

}