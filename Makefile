db-mysql:
	@docker compose up --force-recreate --build -d mysql

phpmyadmin:
	@docker compose up --force-recreate --build -d phpmyadmin

db-postgres:
	@docker compose up --force-recreate --build -d postgres

pgaadmin:
	@docker compose up --force-recreate --build -d pgadmin