package com.adorsys.gis.powerpay.powerpaybackend.controllers_tests;

import org.junit.Test;
import org.junit.jupiter.api.BeforeEach;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import com.adorsys.gis.powerpay.powerpaybackend.controller.SendMoneyController;
import com.adorsys.gis.powerpay.powerpaybackend.domain.Transaction;
import com.adorsys.gis.powerpay.powerpaybackend.services.SendMoneyImpl;
import com.fasterxml.jackson.databind.ObjectMapper;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@WebMvcTest(SendMoneyController.class)
public class SendMoneyControllerTest {

    @Autowired
    private MockMvc mockMvc;
    @Autowired
    private ObjectMapper objectMapper;
    @MockBean private SendMoneyImpl sendMoney;

    @BeforeEach
    public void setup(){
        Transaction transaction = new Transaction();
        transaction.setPhoneNumber("1234567890");
        transaction.setReceiverPhoneNumber("0987654321");
        transaction.setAmount(100.0);
        transaction.setCurrency("FCFA");
        transaction.setId(1);
        when(sendMoney.send("1234567890", "0987654321", 100.0, "FCFA", 1)).thenReturn(transaction);

    }
    @Test
    @WithMockUser(username = "user", password = "password", roles = "USER")
    public void testSendMoney() throws Exception {
        Transaction request = new Transaction();
        request.setPhoneNumber("1234567890");
        request.setReceiverPhoneNumber("0987654321");
        request.setAmount(100.0);
        request.setCurrency("FCFA");
        request.setId(1);
        String jsonRequest = objectMapper.writeValueAsString(request);

        mockMvc.perform(post("/api/transaction")
                .contentType("application/json")
                .content(jsonRequest)
                .with(SecurityMockMvcRequestPostProcessors.csrf().asHeader()))
                .andExpect(status().isOk());
    }
}
