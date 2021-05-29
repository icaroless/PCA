package services;

import com.pca.educapp.model.Aluno;
import com.pca.educapp.model.AlunoRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/userAuth")
public class userAuthService {
    AlunoRepository alunoRepository;

    public userAuthService(AlunoRepository alunoRepository) {
        this.alunoRepository = alunoRepository;
    }

    @GetMapping("/auth")
    public boolean authUser(@PathVariable String email, @PathVariable String password) {
        var aluno = alunoRepository.findByEmail(email);
        if(aluno.authPassword(password)) {
            makeUser(aluno);
            return true;
        }

        return false;
    }

    @GetMapping("/getUser")
    public User makeUser(Aluno aluno) {
        User user = new User(aluno.getNome(), aluno.getEmail(), aluno.getId());
        return user;
    }



    public class User {
        public String nome;
        public String email;
        public Long alunoId;

        public User(String nome, String email, Long alunoId) {
            this.nome = nome;
            this.email = email;
            this.alunoId = alunoId;
        }
    }
}


