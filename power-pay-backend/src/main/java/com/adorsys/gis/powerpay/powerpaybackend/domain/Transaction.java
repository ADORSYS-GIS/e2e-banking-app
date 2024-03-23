package com.adorsys.gis.powerpay.powerpaybackend.domain;

import jakarta.persistence.Entity;

@Entity
public class Transaction extends Procedure {
    private String receiverPhoneNumber;
    private Double amount;
    private String currency;

    private TransactionType transactionType;

    {
        currency = "XAF";
    }

public Transaction(double amount, TransactionType transactionType) {
    super();
    this.amount = amount;
    this.transactionType = transactionType;
}

    public String getReceiverPhoneNumber() {
        return receiverPhoneNumber;
    }

    public void setReceiverPhoneNumber(String receiverPhoneNumber) {
        this.receiverPhoneNumber = receiverPhoneNumber;
    }

    public Double getAmount() {
        return amount;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }

    public String getCurrency() {
        return currency;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }

    public TransactionType getTransactionType() {
        return transactionType;
    }

    public void setTransactionType(TransactionType transactionType) {
        this.transactionType = transactionType;
    }
}