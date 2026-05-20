# Critical_blox_front

## Installation

### Projet git
```
git clone git@github.com:CriticalBlox/Frontend
```

### Frontend
```
cd Critical_blox
npm install
```
## Build image
```
docker compose build
```
## Lancer le projet
```
docker compose up
```
## Lien front local
```
http://localhost:5173/
```

## Env a complété 
```
#database
DATABASE_URL=postgresql+psycopg2://
DB_ECHO=True

#postgres
POSTGRES_USER=
POSTGRES_PASSWORD=
POSTGRES_DB=

#JWT
SECRET_KEY=""
ALGORITHM=""
ACCESS_TOKEN_EXPIRE_MINUTES=

#X-api-key

API_KEY=

#Lien API Public

VITE_API_URL=

```
