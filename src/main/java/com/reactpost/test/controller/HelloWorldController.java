package com.reactpost.test.controller;

import com.reactpost.test.dto.Board;
import com.reactpost.test.dto.Form;
import com.reactpost.test.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class HelloWorldController {

    @Autowired
    BoardService boardService;

//    @GetMapping("/api/hello")
//    @CrossOrigin
//    public List<Board> test() {
//
//        return boardService.findAll();
//    }

    @PostMapping("/api/hello")
    @CrossOrigin
    public void testPost(@RequestBody Form form) {
        boardService.save(form);
    }


}
