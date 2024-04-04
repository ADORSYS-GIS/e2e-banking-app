package com.adorsys.gis.powerpay.powerpaybackend.repository;

import com.adorsys.gis.powerpay.powerpaybackend.domain.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TransactionRepository  extends JpaRepository<Transaction, Long> {
    Double calculateBalaceByPhoneNumber(String phoneNumber);
}
