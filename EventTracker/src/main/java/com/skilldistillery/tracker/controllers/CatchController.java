package com.skilldistillery.tracker.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.tracker.entities.Catch;
import com.skilldistillery.tracker.repositories.CatchRepository;
import com.skilldistillery.tracker.services.CatchService;

@RestController
@RequestMapping("api")
public class CatchController {
	@Autowired
	private CatchService serv;
	@Autowired 
	CatchRepository repo;

	@GetMapping("catches")
	public List<Catch> showAll() {
		return serv.findAllCatches();
	}

	@GetMapping("catches/{id}")
	public Catch findCatchById(@PathVariable("id") int id, HttpServletResponse resp) {
		Catch cat = null;
		try {
			cat = serv.findCatchById(id);
			if (cat != null) {
				resp.setStatus(200);
			} else {
				resp.setStatus(404);
			}
			
		} catch (Exception e) {
			resp.setStatus(400);
			System.err.println(e);
		}
		return cat;
	}

	@PostMapping("catches")
	public Catch createCatch(@RequestBody Catch cat, HttpServletResponse resp,
			HttpServletRequest req) {
		Catch created = null;
		try {
			created = serv.createCatch(cat);
			resp.setStatus(200);
			StringBuffer url = req.getRequestURL();
			url.append("/");
			url.append(created.getId());
			resp.setHeader("Location", url.toString());
			
		} catch(Exception e) {
			resp.setStatus(400);
			System.err.println(e);
		}
		return created;
	}

	@PutMapping("catches/{id}")
	public Catch updateCatch(@PathVariable("id") int id, @RequestBody Catch cat, 
			HttpServletResponse resp) {
		Catch updated = null;
		try {
			updated = serv.updateCatch(id, cat);
			resp.setStatus(200);

		} catch (Exception e) {
			resp.setStatus(400);
			System.err.println(e);
		}
		return updated;
	}

	@DeleteMapping("catches/{id}")
	public void deleteCatch(@PathVariable("id") int id, HttpServletResponse resp) {
		try {
			boolean isDeleted = serv.deleteCatch(id);
			if (isDeleted) {
				resp.setStatus(204);
			} else {
				resp.setStatus(404);
			}
		} catch (Exception e) {
			resp.setStatus(400);
			System.err.println(e);
		}
	}
}
