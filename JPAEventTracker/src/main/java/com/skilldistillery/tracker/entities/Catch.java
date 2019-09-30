package com.skilldistillery.tracker.entities;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Catch {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private Double length;
	private Double weight;
	private Date date;
	private String technique;
	private Double latitude;
	private Double longitude;

	public Catch() {
	}

	public Catch(int id, Double length, Double weight, Date date, String technique, Double latitude, Double longitude) {
		super();
		this.id = id;
		this.length = length;
		this.weight = weight;
		this.date = date;
		this.technique = technique;
		this.latitude = latitude;
		this.longitude = longitude;
	}

	public double getLength() {
		return length;
	}

	public void setLength(double length) {
		this.length = length;
	}

	public double getWeight() {
		return weight;
	}

	public void setWeight(double weight) {
		this.weight = weight;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public String getTechnique() {
		return technique;
	}

	public void setTechnique(String technique) {
		this.technique = technique;
	}

	public double getLat() {
		return latitude;
	}

	public void setLat(double latitude) {
		this.latitude = latitude;
	}

	public double getLongitude() {
		return longitude;
	}

	public void setLongitude(double longitude) {
		this.longitude = longitude;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	@Override
	public String toString() {
		return "catch [id=" + id + "]";
	}

}
