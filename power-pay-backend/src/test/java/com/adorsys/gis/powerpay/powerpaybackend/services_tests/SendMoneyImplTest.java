package com.adorsys.gis.powerpay.powerpaybackend.services_tests;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;
import com.adorsys.gis.powerpay.powerpaybackend.services.SendMoneyImpl;
import com.adorsys.gis.powerpay.powerpaybackend.errorhandling.InsufficientFundsException;
import com.adorsys.gis.powerpay.powerpaybackend.domain.Transaction;

public class SendMoneyImplTest {

    @Test
    public void testSend_NullPhoneNumber_ExceptionThrown() {
        // Arrange
        SendMoneyImpl sendMoneyImpl = new SendMoneyImpl();
        
        // Act & Assert
        assertThrows(IllegalArgumentException.class, () -> {
            sendMoneyImpl.send(null, "1234567890", 100.0, "XAF", 1);
        });
    }

    @Test
    public void testSend_NegativeAmount_ExceptionThrown() {
        // Arrange
        SendMoneyImpl sendMoneyImpl = new SendMoneyImpl();
        
        // Act & Assert
        assertThrows(IllegalArgumentException.class, () -> {
            sendMoneyImpl.send("1234567890", "0987654321", -100.0, "XAF", 1);
        });
    }

    @Test
    public void testSend_InsufficientFunds_ExceptionThrown() {
        // Arrange
        SendMoneyImpl sendMoneyImpl = new SendMoneyImpl();
        
        // Act & Assert
        assertThrows(InsufficientFundsException.class, () -> {
            sendMoneyImpl.send("1234567890", "0987654321", 1000000.0, "XAF", 1);
        });
    }

    @Test
    public void testSend_SuccessfulTransaction() {
        // Arrange
        SendMoneyImpl sendMoneyImpl = new SendMoneyImpl();
        
        // Act
        Transaction transaction = new Transaction();

        try {
        transaction = sendMoneyImpl.send("1234567890", "0987654321", 100.0, "XAF", 1);
        } catch (NullPointerException ex) {
            fail("NullPointerException thrown: " + ex.getMessage());
        } catch (IllegalArgumentException ex) {
            fail("IllegalArgumentException thrown: " + ex.getMessage());
        } catch (InsufficientFundsException ex) {
            fail("InsufficientFundsException thrown: " + ex.getMessage());
        }

        
        // Assert
        assertNull(transaction);
    }
}