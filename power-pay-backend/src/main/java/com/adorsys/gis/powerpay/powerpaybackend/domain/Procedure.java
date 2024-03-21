package com.adorsys.gis.powerpay.powerpaybackend.domain;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public  abstract class Procedure {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    public   ProcedureStatus status = ProcedureStatus.WAITING;
    private String phoneNumber;


    public void markAsDone() {
        status = ProcedureStatus.DONE;
    }

    public void markAsError() {
        status = ProcedureStatus.ERROR;
    }

    public boolean isDone() {
        return status == ProcedureStatus.DONE;
    }

    public boolean isError() {
        return status == ProcedureStatus.ERROR;
    }

    public boolean isWaiting() {
        return status == ProcedureStatus.WAITING;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public ProcedureStatus getStatus() {
        return status;
    }

    public void setStatus(ProcedureStatus status) {
        this.status = status;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
}