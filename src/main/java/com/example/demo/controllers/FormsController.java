package com.example.demo.controllers;

import com.example.demo.models.Form;
import com.example.demo.models.PageOfForms;
import com.example.demo.repositories.FormRepository;
import com.example.demo.repositories.PageOfFormsRepository;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

@RestController
public class FormsController {

    @Resource
    FormRepository formRepo;



//    @PostMapping("/add-form")
//    public String addAForm(@RequestBody Form form) {
//        Form formToAdd = form.officialAmount();
//        formRepo.save(formToAdd);
//        return "redirect:/all-forms";
//
//    }

//    @PostMapping("/add-all-forms")
//    public String addAllForms(@RequestBody Form form) {
//        Form formToAdd = form.officialAmount();
//        formRepo.save(formToAdd);
//        return "all-forms";
//    }






}


