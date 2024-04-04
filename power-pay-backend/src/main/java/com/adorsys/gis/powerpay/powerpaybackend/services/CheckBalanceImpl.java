package com.adorsys.gis.powerpay.powerpaybackend.services;

import jakarta.persistence.EntityManager;
import jakarta.persistence.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service //  annotation to ensure classes are recognized as Spring Beans
public class CheckBalanceImpl implements CheckBalance  {
    private final EntityManager entityManager;

    @Autowired
    public CheckBalanceImpl(EntityManager entityManager){

        this.entityManager = entityManager;
    }

    @Override
    public Double checkBalance(String phoneNumber) throws UsernameNotFoundException {
        String queryString = "SELECT SUM(CASE WHEN t.receiverPhoneNumber = :phoneNumber THEN t.amount ELSE -t.amount END) " +
                "FROM Transaction t WHERE t.receiverPhoneNumber = :phoneNumber OR t.phoneNumber = :phoneNumber";

        Query query = entityManager.createQuery(queryString);
        query.setParameter("phoneNumber", phoneNumber);
        Double balance = (Double) query.getSingleResult();
        return balance != null ? balance : 0.0;
    }
}

