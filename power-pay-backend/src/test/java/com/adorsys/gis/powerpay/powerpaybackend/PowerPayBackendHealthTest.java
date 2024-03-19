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
    void healthEndpointTest() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/actuator/health"))
            .andExpect(result -> {
                if (result.getResponse().getStatus() == 200) {
                    MockMvcResultMatchers.status().isOk().match(result);
                    MockMvcResultMatchers.jsonPath("$.status").value("UP").match(result);
                } else if (result.getResponse().getStatus() >= 500) {
                    MockMvcResultMatchers.status().is5xxServerError().match(result);
                    MockMvcResultMatchers.jsonPath("$.status").doesNotExist().match(result);
                }
            });
    }
}