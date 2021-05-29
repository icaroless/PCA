package com.pca.educapp.web;


import com.pca.educapp.model.Aluno;
import com.pca.educapp.model.AlunoRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.Collection;
import java.util.Optional;

@RestController
@RequestMapping("/api")
class AlunoController {

    private final Logger log = LoggerFactory.getLogger(AlunoController.class);
    private AlunoRepository alunoRepository;

    public AlunoController(AlunoRepository alunoRepository) {
        this.alunoRepository = alunoRepository;
    }

    @GetMapping("/alunos")
    Collection<Aluno> alunos() {
        return alunoRepository.findAll();
    }

   @GetMapping("/aluno/{id}")
    ResponseEntity<?> getAluno(@PathVariable Long id) {
        System.out.println(("id: " + id));
        Optional<Aluno> aluno = alunoRepository.findById(id);
        return aluno.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping("/aluno")
    ResponseEntity<Aluno> createAluno(@Valid @RequestBody Aluno aluno) throws URISyntaxException {
        log.info("Request to create aluno: {}", aluno);
        Aluno result = alunoRepository.save(aluno);
        return ResponseEntity.created(new URI("/api/aluno/" + result.getId()))
                .body(result);
    }

    @PutMapping("/aluno/{id}")
    ResponseEntity<Aluno> updateAluno(@Valid @RequestBody Aluno aluno) {
        log.info("Request to update aluno: {}", aluno);
        Aluno result = alunoRepository.save(aluno);
        return ResponseEntity.ok().body(result);
    }

    @DeleteMapping("/aluno/{id}")
    public ResponseEntity<?> deleteAluno(@PathVariable Long id) {
        log.info("Request to delete aluno: {}", id);
        alunoRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
