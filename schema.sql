DROP TABLE IF EXISTS users;

CREATE TABLE users (
	id SERIAL PRIMARY KEY,
	name TEXT NOT NULL,
	phone_number TEXT,
	email TEXT,
	public_key TEXT NOT NULL
);

INSERT INTO public.users (name, phone_number, email, public_key) VALUES ('a', '07554849303', 'a@a.com', 'akey');
INSERT INTO public.users (name, phone_number, email, public_key) VALUES ('b', '07556490371', 'b@b.com', 'bkey');
INSERT INTO public.users (name, phone_number, email, public_key) VALUES ('c', '07884657294', 'c@c.com', 'ckey');
INSERT INTO public.users (name, phone_number, email, public_key) VALUES ('d', '07556493846', 'd@d.com', 'dkey');