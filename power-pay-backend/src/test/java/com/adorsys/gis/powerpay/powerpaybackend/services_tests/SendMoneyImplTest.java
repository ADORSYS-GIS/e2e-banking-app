package com.adorsys.gis.powerpay.powerpaybackend.services_tests;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import com.adorsys.gis.powerpay.powerpaybackend.domain.Transaction;
import com.adorsys.gis.powerpay.powerpaybackend.repository.MoneyTransferRepository;
import com.adorsys.gis.powerpay.powerpaybackend.services.SendMoneyImpl;

@RunWith(SpringRunner.class)
@SpringBootTest
public class SendMoneyImplTest {

    @Autowired
    private SendMoneyImpl sendMoneyImpl;

    @MockBean
    private MoneyTransferRepository moneyTransferRepository;
    @Test
    public void testSend_NullPhoneNumber_ExceptionThrown() {
        // Arrange
        
        // Act & Assert
        assertThrows(IllegalArgumentException.class, () -> {
            sendMoneyImpl.send(null, "1234567890", 100.0, "XAF", 1);
        });
    }

    @Test
    public void testSend_NegativeAmount_ExceptionThrown() {
        // Arrange
        
        // Act & Assert
        assertThrows(IllegalArgumentException.class, () -> {
            sendMoneyImpl.send("1234567890", "0987654321", -100.0, "XAF", 1);
        });
    }

    @Test
    public void testSend_SuccessfulTransaction() {
        // Arrange
        Transaction awaitedTransaction = new Transaction();
        when(moneyTransferRepository.save(Mockito.any(Transaction.class))).thenReturn(awaitedTransaction);
        // Act
        Transaction result = sendMoneyImpl.send("1234567890", "0987654321", 100.0, "XAF", 1);

        // Assert
        assertNotNull(result);
        
        assertEquals(awaitedTransaction, result);
        
    }
        
        
}