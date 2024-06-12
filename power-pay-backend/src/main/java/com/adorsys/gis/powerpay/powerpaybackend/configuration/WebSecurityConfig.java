package com.adorsys.gis.powerpay.powerpaybackend.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@EnableWebSecurity
@EnableMethodSecurity(prePostEnabled = true)
@Configuration
public class WebSecurityConfig  {

  
  @Bean
  public SecurityFilterChain configure(HttpSecurity http) throws Exception {
    http
      .csrf((csrf) -> csrf.disable())
      .authorizeHttpRequests((authorize) -> authorize.requestMatchers(HttpMethod.POST, "/**").permitAll()
      .requestMatchers("/**").permitAll()
      .anyRequest().authenticated());

    return http.build();
}  
}
