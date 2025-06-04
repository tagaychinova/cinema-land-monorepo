CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

/*
CREATE TABLE IF NOT EXISTS movie (
	id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
	title VARCHAR(255) NOT NULL,
	genre VARCHAR(255) NOT NULL,
	"yearOfIssue" INT NOT NULL
);
*/

INSERT INTO "Movie" (title, "yearOfIssue") VALUES
    ('Интерстеллар', 2014),
	('Побег из Шоушенка', 1994),
    ('Матрица', 1999);

INSERT INTO "Country" (name) VALUES
    ('Австралия')
    ('Россия'),
	('США'),
    ('Франция');

INSERT INTO "Genre" (name) VALUES
    ('Боевик'),
    ('Детектив'),
    ('Документальный'),
    ('Драма'),
    ('История'),
	('Комедия'),
    ('Мелодрама'),
    ('Музыка'),
    ('Спорт'),
    ('Телешоу'),
    ('Триллер'),
    ('Фантастика'),
    ('Фэнтези');

INSERT INTO "User" (email, password) VALUES
    ('admin@cinemaland.ru', '$2b$10$yHMqXiM1uJyYkk5eA6rvruw6PNZpROoNE1HCrPOq9XpVBZPfy1k9q');
