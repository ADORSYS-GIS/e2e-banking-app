package com.adorsys.gis.powerpay.powerpaybackend.domain;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Procedure {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    public   Status status = Status.WAITING;
    private String phoneNumber;


    public void markAsDone() {
        status = Status.DONE;
    }

    public void markAsError() {
        status = Status.ERROR;
    }

    public boolean isDone() {
        return status == Status.DONE;
    }

    public boolean isError() {
        return status == Status.ERROR;
    }

    public boolean isWaiting() {
        return status == Status.WAITING;
    }


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public enum Status {
        DONE,
        WAITING,
        ERROR
    }

    public enum Type {
        Transaction,
        CheckBalance
    }
}