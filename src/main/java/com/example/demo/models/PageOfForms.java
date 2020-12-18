package com.example.demo.models;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;

@Entity
public class PageOfForms {

    @Id
    @GeneratedValue
    private Long id;

    @Transient
    private ArrayList<Form> forms;

    public Long getId() {
        return id;
    }

    public Collection<Form> getForms() {
        return forms;
    }

    public PageOfForms(){
    }

    public PageOfForms(ArrayList<Form> forms) {
        this.forms = forms;
    }

    public void addForm(Form formToAdd) {
        forms.add(formToAdd);
    }


}
