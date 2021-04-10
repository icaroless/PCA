package com.pca.educapp;

import com.pca.educapp.model.Aluno;
import com.pca.educapp.model.AlunoRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;


import java.util.ArrayList;
import java.util.Date;

@Component
class Initializer implements CommandLineRunner {

    private final AlunoRepository repository;

    public Initializer(AlunoRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... strings) {
        Aluno aluno = new Aluno("Gandalf", "Gray", new Date());
        ArrayList<Aluno> alunos = new ArrayList<Aluno>();

        alunos.add(new Aluno("Gandalf", "Gray", new Date()));
        alunos.add(new Aluno("Frodo", "Baggins", new Date()));
        alunos.add(new Aluno("Legolas", "Elf", new Date()));
        alunos.add(new Aluno("Gimli", "Dwarf", new Date()));
        alunos.add(new Aluno("Aragorn", "Strider", new Date()));
        alunos.add(new Aluno("Sam", "Gamgee", new Date()));

        repository.saveAll(alunos);

        repository.findAll().forEach(System.out::println);
    }
}