DROP TABLE IF EXISTS actors;

CREATE TABLE actors (
    id serial PRIMARY KEY,
    name varchar(200) NOT NULL,
    films int NOT NULL,
    awards int
);

DROP TABLE IF EXISTS films;

CREATE TABLE films (
    id serial PRIMARY KEY,
    name varchar(200) NOT NULL,
    director varchar(200) NOT NULL,
    review int
);