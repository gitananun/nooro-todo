## Prisam ORM for MySQL

Prisam ORM is a simple Object Relational Mapping (ORM) for MySQL. It is designed to be simple and easy to use. It is not meant to be a full-featured ORM like Hibernate or Entity Framework. It is meant to be a simple ORM that can be used to quickly and easily interact with a MySQL database.

How to migrate the database schema:

```bash
$ npx prisma migrate dev --name [name]
```

To Manually generate the Prisma Client:

```bash
$ npx prisma generate
```
