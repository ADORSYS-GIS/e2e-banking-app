package com.adorsys.gis.powerpay.powerpaybackend.repository;

import com.adorsys.gis.powerpay.powerpaybackend.domain.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;

@Repository
public interface TransactionRepository  extends JpaRepository<Transaction, Long> {

    @Query("SELECT SUM(CASE WHEN t.receiverPhoneNumber = :phoneNumber THEN t.amount ELSE -t.amount END) " +
            "FROM Transaction t WHERE t.receiverPhoneNumber = :phoneNumber OR t.phoneNumber = :phoneNumber")

    Double calculateBalaceByPhoneNumber(String phoneNumber);
}
