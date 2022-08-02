package com.reactpost.test.respository;

import com.reactpost.test.dto.Board;
import com.reactpost.test.dto.Form;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BoardRepository extends JpaRepository<Form,Integer> {

}
