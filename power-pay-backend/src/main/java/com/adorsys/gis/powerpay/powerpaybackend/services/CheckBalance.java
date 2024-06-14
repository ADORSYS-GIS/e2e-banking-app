package com.adorsys.gis.powerpay.powerpaybackend.services;

import org.springframework.security.core.userdetails.UsernameNotFoundException;

//implementing an empty interface
public interface CheckBalance {
    Double checkBalance(String phoneNumber) throws UsernameNotFoundException;
}