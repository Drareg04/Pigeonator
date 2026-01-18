CREATE TABLE users (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  admin bool,
  PRIMARY KEY (`id`)
);

CREATE TABLE suggestions (
  id bigint(20) NOT NULL AUTO_INCREMENT,
  user_id bigint(20),
  title varchar(255),
  description TEXT,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE comments (
  id bigint(20) NOT NULL AUTO_INCREMENT,
  user_id bigint(20),
  suggestion_id bigint(20),
  comment TEXT,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (suggestion_id) REFERENCES suggestions(id)
);

CREATE TABLE attachments (
  id bigint(20) NOT NULL AUTO_INCREMENT,
  attachment MEDIUMBLOB,
  thing_id bigint(20),
  thing_type varchar(100),
  PRIMARY KEY (id)
);


INSERT INTO users
(name, email, password, admin)
VALUES('admin', 'admin@example.com', '$2y$12$Cc9Wv5XS8q.2xCVzTq05SuMJ9MgVgTkA8NGelUY4X61r5BaBT9Qxq', 1);
-- admin@example.com 12345aA

