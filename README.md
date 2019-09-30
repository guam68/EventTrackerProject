# EventTrackerProject
Week 12 Skill Distillery Project

## Overview
Simple REST API to log bass catches. Catch object fields:
- id
- length
- weight
- date
- technique
- longitude
- lat

Example JSON:
```json
{
        "id": 1,
        "length": 22.0,
        "weight": 6.0,
        "date": "2019-04-14T01:32:00.000+0000",
        "technique": "Texas rigged 10in ribbon tail in motor oil. Pitching into brush",
        "longitude": -100.955875,
        "lat": 29.471714
}
```
## Usage
**Get all catches:**
```
GET http://3.13.2.32:8080/EventTracker/api/catches
```
**Get catch by id:**
```
GET http://3.13.2.32:8080/EventTracker/api/catches/{id}
```
**Create catch:**
```
POST http://3.13.2.32:8080/EventTracker/api/catches/
```
**Update catch:**
```
PUT http://3.13.2.32:8080/EventTracker/api/catches/{id}
```
**Delete catch:**
```
DELETE http://3.13.2.32:8080/EventTracker/api/catches/{id}
```

## Technologies
- Java
- Gradle
- Spring
- JPA/Hibernate
- MySQL
- AWS
- Spring Tool Suite
- Postman
- MySQLWorkbench
