package com.adorsys.gis.powerpay.powerpaybackend.repository;

import com.adorsys.gis.powerpay.powerpaybackend.domain.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MoneyTransferRepo extends JpaRepository<Transaction, String> {
}
