package com.rcrdev.dspesquisa.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rcrdev.dspesquisa.entities.Record;

public interface RecordRepository extends JpaRepository<Record, Long> {

}
