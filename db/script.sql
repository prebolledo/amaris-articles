use amaris_training;

create table articles(
	id int not null auto_increment primary key,
	name varchar(200) not null,
	description text
);