mysql:
	@docker compose up --force-recreate --build -d mysql

phpmyadmin:
	@docker compose up --force-recreate --build -d phpmyadmin

postgres:
	@docker compose up --force-recreate --build -d postgres

pgaadmin:
	@docker compose up --force-recreate --build -d pgaadmin