
CREATE TABLE IF NOT EXISTS aditions (
    id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    numberone integer NOT NULL,
    numbertwo integer NOT NULL,
    result integer NOT NULL
);

-- list al tables
\dt

