CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS movies (
	id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
	title VARCHAR(255) NOT NULL,
	genre VARCHAR(255) NOT NULL,
	"yearOfIssue" INT NOT NULL
);

INSERT INTO movies (title, genre, "yearOfIssue") VALUES
    ('Интерстеллар', 'Драма', 2014),
	('Побег из Шоушенка', 'Детектив', 1994),
    ('Матрица', 'Фантастика', 1999);
