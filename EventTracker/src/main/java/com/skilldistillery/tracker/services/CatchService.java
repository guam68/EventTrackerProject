package com.skilldistillery.tracker.services;

import java.util.List;

import com.skilldistillery.tracker.entities.Catch;

public interface CatchService {
	List<Catch> findAllCatches();
	Catch findCatchById(int id);
	Catch createCatch(Catch cat);
	Catch updateCatch(int id, Catch cat);
	boolean deleteCatch(int id);
}
