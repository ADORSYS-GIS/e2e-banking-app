package com.adorsys.gis.powerpay.powerpaybackend.services;

import com.adorsys.gis.powerpay.powerpaybackend.domain.Transaction;
import org.hibernate.resource.transaction.spi.TransactionStatus;

public interface MoneyTranserInterface {
   Boolean validateTransaction(Transaction transaction);
   Transaction retrieveTransaction(Transaction transaction);
   Boolean validateTransaction(Transaction transaction, TransactionStatus transactionStatus);
}
