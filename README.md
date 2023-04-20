что бы запустить приложение нужно устновать node.js версии >= 18
```bash
node -v #-> 18.4.5
```

клонируем репозиторий (можно скачать как архив; потом убедитесь что находитесь в директории проекта)
```bash
git clone https://github.com/tlksmn/turnstile_api
```
заходим в директорию где лежит исходный код
```bash
cd turnstile_api
```
проверяем в нужную ли директорию мы зашли
```bash
ls #->  src/    test/ .env   .eslintrc.js   .gitignore  ....    package.json     ....
```
запустить в консоли, установив зависимости npm install
```bash
npm install
```
затем прописать конфигуруции в .env файле
```bash
vim .env
```
```dotenv
#имя пользователя базы данных postgres
DB_USERNAME=postgres
#пароль пользователя базы данных postgres
DB_PASSWORD=example
#хост в котором запущена база данных
DB_HOST=localhost
#порт в котором запущена база данных
DB_PORT=5432
#название базы данных
DB_NAME_DATABASE=postgres
```

```dotenv
#эндпоинт перко-веб; (локальный хост и порт)
API_URL=https://ru.percoweb.com/api
#эндпоинт для отправки отчета
EQIZMET_URL=http://0.0.0.0:8080
#токен для запроса
PERCO_TOKEN=master
#БИН организации для которого должно запускаться приложение. Писать через запятую без пробела как тут указано
BINS_ARR=1148024829,5438098362,909237471,205492580
#название здания
BUILDING_NAME=Ак-Орда
#этаж здания
FLOOR_NUMBER=1
```
