package com.reactpost.test.service;

import com.reactpost.test.dto.Board;
import com.reactpost.test.dto.Form;
import com.reactpost.test.respository.BoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BoardService {
    @Autowired
    BoardRepository boardRepository;

//    public List<Board> findAll() {
//        return boardRepository.findAll();
//    }

    public void save(Form form) {
        boardRepository.save(form);
    }

}
