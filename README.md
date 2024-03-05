# Survey App (Backend)

Simple REST APIs built using Postgres and Prisma

## Tech Stack

- DB: Postgres (Neon.tech)
- ORM: Prisma
- Backend: Express
- Language: Typescript (TS)

## APIs implemented

- GET /surveys: Fetch all surveys.
- POST /surveys: Create a new survey.
- GET /surveys/:id: Fetch a specific survey.
- PUT /surveys/:id: Update a specific survey.
- DELETE /surveys/:id: Delete a specific survey.

## Starter Pack Commands

1. Initialize repo

```
npm init -y
```

2. Install Deps

```
npm install express
npm install prisma typescript @types/express --save-dev
```

3. Install Typescript

```
npx tsc --init
Update rootDir to /src and outDir to /dist in tsconfig.json
```

4. Initialize Prisma

```
npx prisma init
```

5. Migrate DB and Generate Prisma client

```
npx prisma migrate dev --name <commit-name>
npx prisma generate
```

6. Run the project

```
npx tsc -b && node dist/index.js
```
