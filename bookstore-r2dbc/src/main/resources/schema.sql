create table if not exists author
(
    id         int primary key,
    first_name text not null,
    last_name  text not null,
    birthday   date
);

create table if not exists book
(
    id          int primary key,
    name        text                  not null,
    description text                  not null,
    author_id   int references author not null
);