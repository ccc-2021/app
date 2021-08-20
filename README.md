## Installation

* If composer is already installed on your development environment.

```Bash
composer install

cp .env.example .env
php artisan key:generate

npm i && npm run prod

./vendor/bin/sail up -d
```

* If you have only Docker installed.

```Bash
docker run --rm \
    -u "$(id -u):$(id -g)" \
    -v $(pwd):/opt \
    -w /opt \
    laravelsail/php80-composer:latest \
    composer install --ignore-platform-reqs

cp .env.example .env

./vendor/bin/sail artisan key:generate

./vendor/bin/sail npm i

./vendor/bin/sail npm run prod

./vendor/bin/sail up -d
```

## Accesses

Now, you can access the application in your web browser at: [http://localhost](http://localhost).
