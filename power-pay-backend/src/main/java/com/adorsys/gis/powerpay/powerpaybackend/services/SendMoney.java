package com.adorsys.gis.powerpay.powerpaybackend.services;

import com.adorsys.gis.powerpay.powerpaybackend.domain.Transaction;

//implementing an empty interface
public interface SendMoney {
    Transaction send(String phoneNumber, String receiverPhoneNumber, Double amount, String currency, Integer id);
}
