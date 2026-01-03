### Setup the project

- Download this project from the github and open it in your favorite text editor.
- In the root directory create `.env` file and add the following env variables

```
    PORT=<port number>
```

ex :-

```
    PORT=3000
```
- Inside the `src/config` folder create a file named as `config.json` and write a following code: 
```
{
  "development": {
    "username": "root",
    "password": null, 
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```



