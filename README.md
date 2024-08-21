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