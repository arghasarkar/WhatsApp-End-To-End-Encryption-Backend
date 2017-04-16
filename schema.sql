DROP TABLE IF EXISTS users;

CREATE TABLE users (
	id SERIAL PRIMARY KEY,
	name TEXT NOT NULL,
	email TEXT NOT NULL,
	public_key TEXT NOT NULL
);

INSERT INTO public.users (name, email, public_key) VALUES ('a', 'a@a.com', 'akey');
INSERT INTO public.users (name, email, public_key) VALUES ('b', 'b@b.com', 'bkey');
INSERT INTO public.users (name, email, public_key) VALUES ('c', 'c@c.com', 'ckey');
INSERT INTO public.users (name, email, public_key) VALUES ('d', 'd@d.com', 'dkey');
INSERT INTO public.users (name, email, public_key) VALUES ('e', 'e@e.com', 'ekey');
INSERT INTO public.users (name, email, public_key) VALUES ('John', 'John@john.com', 'johnpk');
INSERT INTO public.users (name, email, public_key) VALUES ('eg', 'Jasda', 'jeggg');