DROP TABLE IF EXISTS users;

CREATE TABLE users (
	id SERIAL PRIMARY KEY,
	name TEXT NOT NULL,
	email TEXT NOT NULL,
	public_key TEXT NOT NULL
);

INSERT INTO public.users (id, name, email, public_key) VALUES (1, 'a', 'a@a.com', 'akey');
INSERT INTO public.users (id, name, email, public_key) VALUES (2, 'b', 'b@b.com', 'bkey');
INSERT INTO public.users (id, name, email, public_key) VALUES (3, 'c', 'c@c.com', 'ckey');
INSERT INTO public.users (id, name, email, public_key) VALUES (4, 'd', 'd@d.com', 'dkey');
INSERT INTO public.users (id, name, email, public_key) VALUES (5, 'e', 'e@e.com', 'ekey');
INSERT INTO public.users (id, name, email, public_key) VALUES (6, 'John', 'John@john.com', 'johnpk');