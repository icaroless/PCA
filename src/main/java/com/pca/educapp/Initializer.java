package com.pca.educapp;


import com.pca.educapp.model.AlunoRepository;
import helpers.StartServicesHelper;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import com.pca.educapp.web.ConfigureSetup;

@Component
class Initializer implements CommandLineRunner {

    private final AlunoRepository AlunoRepository;

    public Initializer(AlunoRepository repository) {
        this.AlunoRepository = repository;
    }

    @Override
    public void run(String... strings) {
        StartServicesHelper sh = new StartServicesHelper(this.AlunoRepository);
        sh.feedDatabase();
        ConfigureSetup.runBuildConfig();
    }
}