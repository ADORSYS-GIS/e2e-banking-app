package com.adorsys.gis.powerpay.powerpaybackend.services;

import com.adorsys.gis.powerpay.powerpaybackend.domain.Transaction;

//implementing an empty interface
public interface SendMoney {
    Transaction send(Object phoneNumber, String receiverPhoneNumber, Double amount, String currency);
}
