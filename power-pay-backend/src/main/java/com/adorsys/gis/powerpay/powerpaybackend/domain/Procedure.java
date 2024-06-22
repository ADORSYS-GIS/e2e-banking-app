package com.adorsys.gis.powerpay.powerpaybackend.domain;
import jakarta.persistence.*;

@Entity
@Table(name = "procedure")

@Inheritance(strategy = InheritanceType.JOINED)
public  abstract class Procedure {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    public   ProcedureStatus status = ProcedureStatus.WAITING;
    @Column(nullable = false,unique = true)
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