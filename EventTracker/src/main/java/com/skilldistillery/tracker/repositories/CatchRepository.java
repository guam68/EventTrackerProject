package com.skilldistillery.tracker.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.tracker.entities.Catch;

public interface CatchRepository extends JpaRepository<Catch, Integer>{

}
