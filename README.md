## Installation

* If composer is already installed on your development environment.

```Bash
composer install

cp .env.example .env
php artisan key:generate

npm i && npm run prod

./vendor/bin/sail up -d

./vendor/bin/sail artisan key:generate

./vendor/bin/sail npm i
./vendor/bin/sail npm run prod

./vendor/bin/sail artisan migrate

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

./vendor/bin/sail up -d

./vendor/bin/sail artisan key:generate

./vendor/bin/sail npm i
./vendor/bin/sail npm run prod

./vendor/bin/sail artisan migrate
```

## Example Environment Variables
```
DB_CONNECTION=mysql
DB_HOST=mysql
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=sail
DB_PASSWORD=password
```


## Accesses

Now, you can access the application in your web browser at: [http://localhost](http://localhost).

## Commit Message

Must be one of the following:

* feat: 新しい機能
* design: デザインに関する修正
* fix: バグの修正
* docs: ドキュメントのみの変更
* style: 空白、フォーマット、セミコロン追加など
* refactor: 仕様に影響がないコード改善(リファクタ)
* perf: パフォーマンス向上関連
* test: テスト関連
* chore: ビルド、補助ツール、ライブラリ関連
