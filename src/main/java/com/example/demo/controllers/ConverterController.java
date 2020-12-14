package com.example.demo.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ConverterController {

    @RequestMapping("/currency-converter")
    public String displayCurrencyConverterPage(){
        return "british-currency";
    }


    @RequestMapping("/currency-converter2")
    public String displayAnotherCurrencyConverterPage(){
        return "currencyConverter2";
    }


}
