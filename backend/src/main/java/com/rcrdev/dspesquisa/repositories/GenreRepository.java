package com.rcrdev.dspesquisa.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rcrdev.dspesquisa.entities.Genre;

public interface GenreRepository extends JpaRepository<Genre, Long> {

}
