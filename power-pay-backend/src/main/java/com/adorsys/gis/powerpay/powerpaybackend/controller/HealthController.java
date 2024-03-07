package com.adorsys.gis.powerpay.powerpaybackend.controller;

import org.springframework.boot.actuate.health.Health;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Component
public class HealthController {
    
    @RequestMapping("/actuator/health")
    public Health testBackendHealth(){
        return new Health.Builder().status("Up").build();
    }
}
