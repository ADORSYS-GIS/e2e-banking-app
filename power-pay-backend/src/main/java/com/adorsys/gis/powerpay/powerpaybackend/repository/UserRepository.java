package com.adorsys.gis.powerpay.powerpaybackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.adorsys.gis.powerpay.powerpaybackend.domain.User;

public interface UserRepository extends JpaRepository<User, String>{
    
}
