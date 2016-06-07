# Examples

create items

```
{
  "id": "theme-name",
  "description": "The name of a custom theme to load.",
  "displayName": "Theme Name",
  "value": "hpe-light",
  "app": "*"
}
```

local app

`npm start`

local database

`docker run -p --name customization_api 8080:8080 -it mllrjb/customization-api`

linked database

`docker run -p --name customization_api 8080:8080 -it --link customization_db:postgres mllrjb/customization-api`

database

`docker run --name customization_db --rm -e POSTGRES_USER=customization -e POSTGRES_PASSWORD=password -e POSTGRES_DB=customizationdb -e PGDATA=/var/lib/postgresql/data/pgdata postgres`

database with volume

`docker run --name customization_db --rm -e POSTGRES_USER=customization -e POSTGRES_PASSWORD=password -e POSTGRES_DB=customizationdb -e PGDATA=/var/lib/postgresql/data/pgdata -v /Users/jason/projects/sandbox/customization-api/.tmp:/var/lib/postgresql/data/pgdata  postgres`

psql on database

`docker run -it --rm --link customization_db:postgres postgres psql -h postgres -U customization customization_db`
