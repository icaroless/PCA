package com.pca.educapp.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

import javax.persistence.*;
import java.util.Date;
import java.util.Set;

@Data
@NoArgsConstructor
@RequiredArgsConstructor
@Entity
@Table(name = "Aluno")
public class Aluno {

    @Id
    @GeneratedValue
    private Long id;
    @NonNull
    private String nome;
    @NonNull
    private String sobreNome;
    @NonNull
    private Integer matricula;
    private Date dataNascimento;


    public Aluno(String nome, String sobreNome, Date dataNascimento) {
        this.nome = nome;
        this.sobreNome = sobreNome;
        this.dataNascimento = dataNascimento;
    }
}
