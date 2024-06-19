package com.adorsys.gis.powerpay.powerpaybackend.repository;

import com.adorsys.gis.powerpay.powerpaybackend.domain.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public class MoneyTransferValidateRepo {
    public interface MoneyTransferRepo extends JpaRepository<Transaction, String> {
    }
}