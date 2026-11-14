### Setup Project
```
npm init -y
npm i express bcrypt
npm i –save-dev nodemon
```

### Set up Package json
```
{
    "scripts" : {
        "start": "node server.js",
        "dev": "node --watch server.js"
    }
}
```