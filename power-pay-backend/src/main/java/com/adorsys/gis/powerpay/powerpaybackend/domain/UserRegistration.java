package com.adorsys.gis.powerpay.powerpaybackend.domain;

import jakarta.persistence.Entity;

@Entity
public class UserRegistration extends Procedure{
    private String opt;
    private String userName;

    public String getOpt() {
        return opt;
    }

    public void setOpt(String opt) {
        this.opt = opt;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }
}

