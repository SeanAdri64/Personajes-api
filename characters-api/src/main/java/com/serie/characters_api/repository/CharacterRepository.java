package com.serie.characters_api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.serie.characters_api.model.Character;

@Repository
public interface CharacterRepository extends JpaRepository<Character, Long> {

    List<Character> findAllByOrderByNameAsc();

    List<Character> findAllByOrderByCreatedAtDesc();
}
