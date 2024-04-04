package com.adorsys.gis.powerpay.powerpaybackend.services_tests;

import com.adorsys.gis.powerpay.powerpaybackend.domain.Transaction;
import com.adorsys.gis.powerpay.powerpaybackend.repository.TransactionRepository;
import com.adorsys.gis.powerpay.powerpaybackend.services.CheckBalance;
import com.adorsys.gis.powerpay.powerpaybackend.services.CheckBalanceImpl;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;
import java.util.List;

public class CheckBalanceTest {

    @Mock
    private TransactionRepository transactionRepository;

    private CheckBalance checkBalanceService;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
        checkBalanceService = new CheckBalanceImpl(transactionRepository);
    }

    @Test
    public void testCheckBalance() {
        List<Transaction> transactions = new ArrayList<>();
        Transaction transaction1 = new Transaction();
        transaction1.setReceiverPhoneNumber("1234567890");
        transaction1.setAmount(500.0);
        transactions.add(transaction1);

        Transaction transaction2 = new Transaction();
        transaction2.setPhoneNumber("1234567890");
        transaction2.setAmount(200.0);
        transactions.add(transaction2);

        Mockito.when(transactionRepository.calculateBalaceByPhoneNumber(Mockito.anyString())).thenReturn(700.0);

        Double balance = checkBalanceService.checkBalance("1234567890");

        Assertions.assertEquals(700.0, balance);
    }

    @Test
    public void testCheckBalanceWithNoTransactions() {
        Mockito.when(transactionRepository.calculateBalaceByPhoneNumber(Mockito.anyString())).thenReturn(null);

        Double balance = checkBalanceService.checkBalance("1234567890");

        Assertions.assertEquals(0.0, balance);
    }
}
