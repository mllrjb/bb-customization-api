# Examples

local app

`npm start`

local database

`docker run -p 8080:8080 -it mllrjb/customization-api`

linked database

`docker run -p 8080:8080 -it --link customizationdb:customizationdb mllrjb/customization-api`

database

`docker run --name customizationdb --rm -e POSTGRES_USER=customization -e POSTGRES_PASSWORD=password -e POSTGRES_DB=customizationdb -e PGDATA=/var/lib/postgresql/data/pgdata postgres`

database with volume

`docker run --name customizationdb --rm -e POSTGRES_USER=customization -e POSTGRES_PASSWORD=password -e POSTGRES_DB=customizationdb -e PGDATA=/var/lib/postgresql/data/pgdata -v /Users/jason/projects/sandbox/customization-api/.tmp:/var/lib/postgresql/data/pgdata  postgres`

psql on database

`docker run -it --rm --link customizationdb:postgres postgres psql -h postgres -U customization customizationdb`
