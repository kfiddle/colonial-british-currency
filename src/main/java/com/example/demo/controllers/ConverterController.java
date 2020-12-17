package com.example.demo.controllers;

import com.example.demo.models.Form;
import com.example.demo.models.PageOfForms;
import com.example.demo.repositories.FormRepository;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Controller
public class ConverterController {

    @Resource
    private FormRepository formRepo;


    @RequestMapping("/currency-converter")
    public String displayCurrencyConverterPage() {
        return "british-currency";
    }

    @RequestMapping("/currency-converter2")
    public String displayAnotherCurrencyConverterPage() {
        return "currencyConverter2";
    }

    @RequestMapping("/test-form")
    public String displayTestConverterPage(Model model) {
        Collection<Form> foundForms = (Collection<Form>) formRepo.findAll();
        if (!foundForms.isEmpty()) {
            model.addAttribute("forms", foundForms);
        }
        return "testForm";
    }

//    @PostMapping("/add-form")
//    public String addAForm(@RequestParam String pounds, String shillings, String pence) {
//        int officialPounds = 0;
//        int officialShillings = 0;
//        int officialPence = 0;
//
//        if (!pounds.isEmpty()) {
//            officialPounds = Integer.parseInt(pounds);
//        }
//        if (!shillings.isEmpty()) {
//            officialShillings = Integer.parseInt(shillings);
//        }
//        if (!pence.isEmpty()) {
//            officialPence = Integer.parseInt(pence);
//        }
//
//        Form formToAdd = new Form(officialPounds, officialShillings, officialPence);
//        formRepo.save(formToAdd);
//        return "redirect:/test-form";
//    }

    @PostMapping("/delete-forms")
    public String deleteAllForms() {
        formRepo.deleteAll();
        return "redirect:/test-form";
    }

    @RequestMapping("/all-forms")
    public String displayAllFormsInRepo(Model model) {
        model.addAttribute("forms", formRepo.findAll());
        Collection<Form> foundForms = (Collection<Form>) formRepo.findAll();
        model.addAttribute("size", foundForms.size());
        return "allFormsTest";
    }


}

//@RestController
//public class RestWebController {
//
//    List<Customer> cust = new ArrayList<Customer>();
//
//    @RequestMapping(value = "/getallcustomer", method = RequestMethod.GET)
//    public Response getResource() {
//        Response response = new Response("Done", cust);
//        return response;
//    }
//
//    @RequestMapping(value = "/postcustomer", method = RequestMethod.POST)
//    public Response postCustomer(@RequestBody Customer customer) {
//        cust.add(customer);
//        // Create Response Object
//        Response response = new Response("Done", customer);
//        return response;
//    }
//}

