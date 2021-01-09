package com.example.demo.controllers;

import com.example.demo.models.Form;
import com.example.demo.repositories.FormRepository;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.Collection;

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

    @RequestMapping("/converter-accordions")
    public String displayConverterAccordionsPage() {
        return "converterAccordions";
    }

    @RequestMapping("/test-form")
    public String displayTestConverterPage(Model model) {
        Collection<Form> foundForms = (Collection<Form>) formRepo.findAll();
        if (!foundForms.isEmpty()) {
            model.addAttribute("forms", foundForms);
        }
        return "testForm";
    }



    @PostMapping("/delete-forms")
    public String deleteAllForms() {
        formRepo.deleteAll();
        return "redirect:/test-form";
    }

        @PostMapping("/add-form")
    public String addAForm(@RequestBody Form...forms) {
        for (Form form : forms) {
            Form formToAdd = form.officialAmount();
            formRepo.save(formToAdd);
        }
        return "redirect:/all-forms";

    }

    @RequestMapping("/all-forms")
    public String displayAllFormsInRepo(Model model) {
        model.addAttribute("forms", formRepo.findAll());
        Collection<Form> foundForms = (Collection<Form>) formRepo.findAll();
        model.addAttribute("size", foundForms.size());

        Collection<Form> formsToAddTogether = new ArrayList<>();
        for (Form form : formRepo.findAll()){
            Form convertedForm = form.officialAmount();
            formsToAddTogether.add(convertedForm);
        }

        int totalPounds = 0;
        int totalShillings = 0;
        int totalPence = 0;

        for (Form form : formsToAddTogether) {
            totalPounds += form.getPounds();
            totalShillings += form.getShillings();
            totalPence += form.getPence();
        }

        Form addedResult = new Form(totalPounds, totalPence, totalPence);
        Form convertedResult = addedResult.officialAmount();

        model.addAttribute("convertedResult", convertedResult);

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

