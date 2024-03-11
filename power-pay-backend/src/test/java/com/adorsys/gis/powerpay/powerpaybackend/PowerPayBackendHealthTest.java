package com.adorsys.gis.powerpay.powerpaybackend;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;

@SpringBootTest
@AutoConfigureMockMvc
@ContextConfiguration(classes = { PowerPayBackendApplication.class })
class PowerPayBackendHealthTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    void healthEndpointTest_Failure() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/actuator/health"))
            .andExpect(MockMvcResultMatchers.status().is5xxServerError())
            .andExpect(MockMvcResultMatchers.jsonPath("$.status").doesNotExist());
    }

    @Test
    void healthEndpointTest() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/actuator/health"))
            .andExpect(MockMvcResultMatchers.status().isOk())
            .andExpect(MockMvcResultMatchers.jsonPath("$.status").value("UP"));
    }
}
