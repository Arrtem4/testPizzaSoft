---

Установка

Для начала клонируйте репозиторий и установите зависимости:

git clone https://github.com/Arrtem4/testPizzaSoft.git

Зайдите в папку проекта и установите зависимости

npm install

---

Запуск проекта

Для запуска проекта в режиме разработки используйте команду:

npm start

Проект будет доступен по адресу http://localhost:5173/testPizzaSoft/

---

Структура проекта:

├── public/ # Публичные файлы
├── src/ # Исходные файлы
│ ├── assets/ # Статические ресурсы
│ ├── components/ # Компоненты React
│ ├── pages/ # Страницы приложения
│ ├── data/ # Данные для options
│ ├── redux/ # Redux store
│ ├── style/ # стили
│ ├── App.jsx # Главный компонент приложения
│ ├── index.jsx # Точка входа
├── .eslintrc.js # Конфигурация ESLint
├── vite.config.js # Конфигурация Vite
├── package.json # Зависимости и скрипты
└── README.md # Этот файл
