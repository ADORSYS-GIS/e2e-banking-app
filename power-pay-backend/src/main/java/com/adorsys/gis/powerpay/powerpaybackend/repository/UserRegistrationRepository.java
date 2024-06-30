package com.adorsys.gis.powerpay.powerpaybackend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.adorsys.gis.powerpay.powerpaybackend.domain.UserRegistration;




public interface UserRegistrationRepository extends JpaRepository<UserRegistration, Integer> {
    UserRegistration findByPhoneNumber(String phoneNumber);
    String findByOpt(String opt);
    
}
