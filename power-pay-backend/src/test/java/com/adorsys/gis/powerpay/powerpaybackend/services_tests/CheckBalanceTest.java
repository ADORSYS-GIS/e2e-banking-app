package com.adorsys.gis.powerpay.powerpaybackend.services_tests;

import com.adorsys.gis.powerpay.powerpaybackend.services.CheckBalance;
import com.adorsys.gis.powerpay.powerpaybackend.services.CheckBalanceImpl;
import jakarta.persistence.EntityManager;
import jakarta.persistence.Query;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;

public class CheckBalanceTest {

    @Mock
    private EntityManager entityManager;

    private CheckBalance checkBalanceService;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
        checkBalanceService = new CheckBalanceImpl(entityManager);
    }

    @Test
    public void testCheckBalance() {
        // Mocking the Query and setting up expected behavior
        Query query = Mockito.mock(Query.class);
        Mockito.when(entityManager.createQuery(Mockito.anyString())).thenReturn(query);
        Mockito.when(query.setParameter(Mockito.anyString(), Mockito.any())).thenReturn(query);
        Mockito.when(query.getSingleResult()).thenReturn(1000.0);


        Double balance = checkBalanceService.checkBalance("1234567890");

        Assertions.assertEquals(1000.0, balance);
    }

    @Test
    public void testCheckBalanceWithNoTransactions() {
        // Mocking the Query and setting up expected behavior for no transactions
        Query query = Mockito.mock(Query.class);
        Mockito.when(entityManager.createQuery(Mockito.anyString())).thenReturn(query);
        Mockito.when(query.setParameter(Mockito.anyString(), Mockito.any())).thenReturn(query);
        Mockito.when(query.getSingleResult()).thenReturn(null);

        Double balance = checkBalanceService.checkBalance("1234567890");

        Assertions.assertEquals(0.0, balance);
    }
}
