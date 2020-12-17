package com.example.demo.repositories;

import com.example.demo.models.Form;
import org.springframework.data.repository.CrudRepository;

public interface FormRepository extends CrudRepository<Form, Long> {
}
