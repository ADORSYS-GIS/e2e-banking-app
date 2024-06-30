package com.adorsys.gis.powerpay.powerpaybackend.domain;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserRegistrationResponseBody {
   private String text;

public UserRegistrationResponseBody(String text) {
    this.text = text;
}
    
}