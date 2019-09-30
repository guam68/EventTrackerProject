package com.skilldistillery.tracker.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.tracker.entities.Catch;
import com.skilldistillery.tracker.repositories.CatchRepository;

@Service
public class CatchServiceImpl implements CatchService {
	@Autowired
	private CatchRepository repo;

	@Override
	public List<Catch> findAllCatches() {
		return repo.findAll();
	}

	@Override
	public Catch findCatchById(int id) {
		return repo.findById(id).get();
	}

	@Override
	public Catch createCatch(Catch cat) {
		Catch created = repo.saveAndFlush(cat);
		return created;
	}

	@Override
	public Catch updateCatch(int id, Catch cat) {
		Optional<Catch> updatedOpt = repo.findById(id);
		Catch updated = null;

		if (updatedOpt.isPresent()) {
			updated = updatedOpt.get();

			updated.setDate(cat.getDate());
			updated.setLat(cat.getLat());
			updated.setLongitude(cat.getLongitude());
			updated.setLength(cat.getLength());
			updated.setTechnique(cat.getTechnique());
			updated.setWeight(cat.getWeight());

			repo.saveAndFlush(updated);
		}

		return updated;
	}

	@Override
	public boolean deleteCatch(int id) {
		boolean isDeleted = false;
		repo.delete(repo.findById(id).get());

		if(!repo.findById(id).isPresent()) {
			isDeleted = true;
		}
		return isDeleted;
	}

}
