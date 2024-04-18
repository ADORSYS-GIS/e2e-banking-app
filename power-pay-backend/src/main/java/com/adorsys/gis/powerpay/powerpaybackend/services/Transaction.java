package com.adorsys.gis.powerpay.powerpaybackend.services;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Transaction {
    private String transactionId;
    private String senderAccountId;
    private String recipientAccountId;
    private String pin;
}
