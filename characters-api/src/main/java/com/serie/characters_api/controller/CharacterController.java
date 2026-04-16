package com.serie.characters_api.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.serie.characters_api.model.Character;
import com.serie.characters_api.service.CharacterService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/characters")
@RequiredArgsConstructor
@CrossOrigin("*")
public class CharacterController {

    private final CharacterService service;

    @GetMapping
    public List<Character> getAll(
            @RequestParam(defaultValue = "date") String sortBy) {
        return service.getAll(sortBy);
    }

    @PostMapping
    public Character create(@RequestBody Character character) {
        return service.create(character);
    }

    @PutMapping("/{id}")
    public Character update(@PathVariable Long id,
            @RequestBody Character character) {
        return service.update(id, character);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }
}
