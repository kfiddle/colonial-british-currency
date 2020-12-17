package com.example.demo.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Form {

    @Id
    @GeneratedValue
    private Long id;

    private int pounds;
    private int shillings;
    private int pence;


    public Long getId() {
        return id;
    }

    public int getPounds() {
        return pounds;
    }

    public int getShillings() {
        return shillings;
    }

    public int getPence() {
        return pence;
    }

    public Form() {
    }

    public Form(Integer pounds, Integer shillings, Integer pence) {
        int totalPence = (pounds * 240) + (shillings * 12) + pence;

        int officialPounds = totalPence / 240;
        int remainingPence = totalPence % 240;
        int officialShillings = remainingPence / 12;
        int officialPence = remainingPence % 12;

        this.pounds = officialPounds;
        this.shillings = officialShillings;
        this.pence = officialPence;
    }

    public Form officialAmount() {
        int totalPence = this.amountInPence();
        int officialPounds = totalPence / 240;
        int remainingPence = totalPence % 240;
        int officialShillings = remainingPence / 12;
        int officialPence = remainingPence % 12;

        Form convertedForm = new Form(officialPounds, officialShillings, officialPence);
        convertedForm.pounds = officialPounds;
        convertedForm.shillings = officialShillings;
        convertedForm.pence = officialPence;

        return convertedForm;
    }

    public int amountInPence() {
        return (pounds * 240) + (shillings * 12) + pence;
    }


}









