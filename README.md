# Setup

## Add sqlite to your OS

https://dev.to/dendihandian/installing-sqlite3-in-windows-44eb

## Create the DB

Run with "Git bash", this do not work with powershell
```
sqlite3 database.db < config/db/schema.sql
```

## Install dependencies:

```
npm i
```

# Start application
```
npm run dev
```

# Doc API

- créer un compte :
    - URL: ${API_URL}/auth/register
    - Method: POST
    - body {email, password, name}
- login :
    - URL: ${API_URL}/auth/login
    - Method: POST
    - body {email, password}
- chercher un park 
    - URL: ${API_URL}/search?q=${maRecherche}
    - Method: GET
