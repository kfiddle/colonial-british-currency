package com.example.demo.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.Collection;

@Entity
public class PageOfForms {

    @Id
    @GeneratedValue
    private Long id;

    @OneToMany
    private Collection<Form> forms;

    public Long getId() {
        return id;
    }

    public Collection<Form> getForms() {
        return forms;
    }

    public PageOfForms(){
    }

    public PageOfForms(Collection<Form> forms) {
        this.forms = forms;
    }
}
