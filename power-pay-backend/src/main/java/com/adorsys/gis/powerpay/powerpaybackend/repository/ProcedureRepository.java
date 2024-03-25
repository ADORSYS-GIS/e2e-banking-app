package com.adorsys.gis.powerpay.powerpaybackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.adorsys.gis.powerpay.powerpaybackend.domain.Procedure;

public interface ProcedureRepository extends JpaRepository<Procedure, Integer> {
    
}
