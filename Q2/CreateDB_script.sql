create database nodejs_demo;

use nodejs_demo;

create table Users (
	id int auto_increment primary key,
	name varchar(200),
	email varchar(255) not null unique,
	password text not null,
	createdAt datetime default current_timestamp,
	check (email like '%_@__%.__%')
);

create table Books (
	id int auto_increment primary key,
	name varchar(100),
	description varchar(512),
    price decimal(18, 2),
    note varchar(128),
	createdAt datetime default current_timestamp
);