package com.serie.characters_api.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import com.serie.characters_api.model.Character;
import com.serie.characters_api.repository.CharacterRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CharacterService {

    private final CharacterRepository repository;

    @Cacheable("characters")
    public List<Character> getAll(String sortBy) {
        if ("name".equals(sortBy)) {
            return repository.findAllByOrderByNameAsc();
        }
        return repository.findAllByOrderByCreatedAtDesc();
    }

    public Character create(Character character) {
        character.setCreatedAt(LocalDateTime.now());
        return repository.save(character);
    }

    public Character update(Long id, Character data) {
        Character c = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Not found"));

        c.setName(data.getName());
        c.setRole(data.getRole());
        c.setDescription(data.getDescription());
        c.setImage(data.getImage());

        return repository.save(c);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }
}
