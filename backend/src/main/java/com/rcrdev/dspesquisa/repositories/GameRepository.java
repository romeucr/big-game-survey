package com.rcrdev.dspesquisa.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rcrdev.dspesquisa.entities.Game;

public interface GameRepository extends JpaRepository<Game, Long> {

}
