package com.pca.educapp.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

import javax.persistence.*;
import java.text.NumberFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.Locale;
import java.util.function.ToIntFunction;

@Data
@NoArgsConstructor
@Entity
@Table(name = "Aluno")
public class Aluno {
    @Id
    @GeneratedValue
    private int id = 0;
    @NonNull
    private String nome;
    @NonNull
    private String sobreNome;
    private Long matricula;
    @NonNull
    private Date dataNascimento;
    @NonNull
    private String email;


    public Aluno(String nome, String sobreNome, Date dataNascimento, String email) {
        this.nome = nome;
        this.sobreNome = sobreNome;
        this.dataNascimento = dataNascimento;
        this.email = email;
    }
}
