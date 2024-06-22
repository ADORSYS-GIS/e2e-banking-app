package com.adorsys.gis.powerpay.powerpaybackend.domain;
import jakarta.validation.constraints.Digits;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;



@Getter
@Setter
public class FirstRegistrationRequest {
@NotEmpty(message = "Name may not be empty")
@Size(min = 2, max = 32)
    private String userName;

    @Digits(fraction = 0, integer = 12)
    private String phoneNumber;
}