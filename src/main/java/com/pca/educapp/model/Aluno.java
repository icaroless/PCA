package com.pca.educapp.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

import javax.persistence.*;
import java.util.Date;

@Data
@NoArgsConstructor
@Entity
@Table(name = "Aluno")
public class Aluno {
    @Id
    @GeneratedValue
    private Long Id;
    @NonNull
    private String nome;
    @NonNull
    private String sobreNome;
    private Long matricula;
    @NonNull
    private Date dataNascimento;
    @NonNull
    private String email;
    @NonNull
    private String password;


    public Aluno(String nome, String sobreNome, Date dataNascimento, String email, String password) {
        this.nome = nome;
        this.sobreNome = sobreNome;
        this.dataNascimento = dataNascimento;
        this.email = email;
        this.password = password;
    }

    public long getId() {
        return this.Id;
    }

    public Date getDataNascimento() {
        return this.dataNascimento;
    }

    public boolean authPassword(String password) {
        return this.password == password;
    }
}
