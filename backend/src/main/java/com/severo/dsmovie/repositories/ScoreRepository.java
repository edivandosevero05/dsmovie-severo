package com.severo.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.severo.dsmovie.entities.Score;
import com.severo.dsmovie.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK>{

}
