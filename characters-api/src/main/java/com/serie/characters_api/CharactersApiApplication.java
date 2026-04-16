package com.serie.characters_api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;

@SpringBootApplication
@EnableCaching
public class CharactersApiApplication {

    public static void main(String[] args) {
        SpringApplication.run(CharactersApiApplication.class, args);
    }

}
