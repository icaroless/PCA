package com.pca.educapp.model;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AlunoRepository extends JpaRepository<Aluno, Long> {
    Aluno findByNome(String nome);
}
