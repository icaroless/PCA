package helpers;


import com.pca.educapp.model.Aluno;
import com.pca.educapp.model.AlunoRepository;

import java.util.ArrayList;
import java.util.Date;
import java.util.Scanner;

//class especializada na ajuda de configuração de serviços, inicialização de sistemas e feedback de processos internos.
public class StartServicesHelper {
    private final AlunoRepository AlunoRepository;

    public StartServicesHelper(AlunoRepository repository) {
        this.AlunoRepository = repository;
    }

    public void feedDatabase() {

        //alimenta o banco de dados com alguns alunos caso a base esteja vazia.
        if (AlunoRepository.findAll().size() == 0) {
            ArrayList<Aluno> alunos = new ArrayList<Aluno>();

            alunos.add(new Aluno("Gandalf", "Gray", new Date(1146-03-31), "gandalf@faculdade.com.br"));
            alunos.add(new Aluno("Frodo", "Baggins", new Date(1532-01-04), "frodo@faculdade.com.br"));
            alunos.add(new Aluno("Legolas", "Elf", new Date(1395-05-27), "legolas@faculdade.com.br"));
            alunos.add(new Aluno("Gimli", "Dwarf", new Date(1402-9-15), "gimli@faculdade.com.br"));
            alunos.add(new Aluno("Aragorn", "Strider", new Date(1406-10-15), "aragorn@faculdade.com.br"));
            alunos.add(new Aluno("Sam", "Gamgee", new Date(1530-11-27), "samg@faculdade.com.br"));

            AlunoRepository.saveAll(alunos);
            AlunoRepository.findAll().forEach(System.out::println);
        }
    }
}
