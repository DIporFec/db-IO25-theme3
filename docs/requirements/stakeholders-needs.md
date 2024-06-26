# Запити зацікавлених осіб

## Вступ

Сучасний світ надзвичайно насичений інформацією, яка надходить з різних джерел. Системи аналізу медіа-контенту відіграють важливу роль у цьому процесі. Вони дозволяють обробляти та аналізувати великі обсяги даних, що стосуються новин, соціальних мереж, відео та інших медіа-ресурсів. 

### Мета 

Нашою метою є - створення та використання системи за для якісного аналізу новин, соціальних мереж, відео та інших медіа-ресурсів.

### Контекст

У світі все більше й більше інформації яку ми отримуємо з різноманітних джерел, будь то наші знайомі, друзі чи соціальні мережі або телебачення. У такому світі важко дотримуватись "інформаційної гігієни". Отже, система аналізу медіа-контенту буде корисною як для фахівців, так і для звичайних користувачів.

### Основні визначення та скорочення

[Основні визначення](state-of-the-art.md#основні-визначення)

### Посилання

[Посилання](state-of-the-art.md#посилання)

## Характеристика ділових процесів
При аналізі медіа-контенту успішність розробки моделі визначається взаємодією системи аналізу з власною бізнес-екосистемою та глибоким вивченням зовнішніх і внутрішніх впливів.

**Внутрішні фактори**

* **Аналітик-координатор** 

*Фахівець, відповідальний за керівництво процесом аналізу медіа-контенту.
*Функції: 
- Розробка методології для аналізу.
- Розподіл роботи між командою.
- Забезпечення якості та вчасності виконання завдань.

* **Дослідник** 

*Особа, що спеціалізується на аналізі медіа-контенту.
*Функції: 
- Вивчення наявності, вмісту та впливу медіа-контенту.
- Використання спеціалізованих інструментів та методів.

* **Технічний експерт** 

*Спеціаліст, який забезпечує технічну підтримку системи аналізу.
*Функції: 
- Вирішення технічних проблем.
- Реагування на запити користувачів.
- Контроль дотримання правил використання системи.

**Зовнішні фактори**

* **Замовник** 
*Фізична особа або юридична структура, яка формує завдання для аналізу медіа-контенту
*Взаємодія:
- Замовник може не бути безпосередньо в контакті з системою аналізу, але взаємодіє з нею через своїх представників у команді.

**Специфікація бізнес-сценаріїв :** 

## Корисувач

* **Авторизація**

| **_ID:_**                | user_login                                                                                                 |
| ------------------------ | -----------------------------------------------------------------------------------------------------------|
| **_НАЗВА:_**             | Авторизація користувача                                                                                    |
| **_УЧАСНИКИ:_**          | Користувач, система                                                                                        |
| **_ПЕРЕДУМОВИ:_**        | Користувач вже має обліковий запис в системі                                                               |
| **_РЕЗУЛЬТАТ:_**         | Користувач авторизований у системі                                                                         |
| **_ВИКЛЮЧНІ СИТУАЦІЇ:_** | wrong_password Введений хибний пароль                                                                      |
|                          | no_user Користувач не зареєстрований у системі                                                             |
| **_ОСНОВНИЙ СЦЕНАРІЙ:_** | 1. Користувач тисне на кнопку "Увійти"                                                                     |
|                          | 2. Користувач отримує поля для вводу даних і вводить пароль та логін для свого облікового запису           |
|                          | 3. Користувач натискає кнопку "Увійти" і відсилає дані системі                                             |
|                          | 4. Система авторизує користувача (можливі wrong_password та no_user)                                       |

* **Реєстрація**

| **_ID:_**                | user_register                                                                                              |
| ------------------------ | -----------------------------------------------------------------------------------------------------------|
| **_НАЗВА:_**             | Реєстрація користувача                                                                                     |
| **_УЧАСНИКИ:_**          | Користувач, система                                                                                        |
| **_ПЕРЕДУМОВИ:_**        | Користувач не має облікового запису в системі                                                              |
| **_РЕЗУЛЬТАТ:_**         | Користувач має акаунт                                                                                      |
| **_ВИКЛЮЧНІ СИТУАЦІЇ:_** | user_exists Обліковий запис з такими даними вже існує                                                      |
|                          | wrong_credentials Неправильно введені дані                                                                 |
| **_ОСНОВНИЙ СЦЕНАРІЙ:_** | 1. Користувач тисне на кнопку "Зареєструватися"                                                            |
|                          | 2. Користувач отримує поля для вводу даних і вводить реєстраційні дані для свого облікового запису         |                         
|                          | 3. Користувач натискає кнопку "Зареєструватися" і відсилає дані системі (можлива wrong_credentials)        |
|                          | 4. Система реєструє користувача (можлива user_exists)                                                      |

* **Аналіз медіа-контенту**

| **ID:**                | media_analysis                                                                                                                                                                     |
|------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **НАЗВА:**             | Аналіз медіа-контенту                                                                                                                                                              |
| **УЧАСНИКИ:**          | Користувач, Система                                                                                                                                                                |
| **ПЕРЕДУМОВИ:**        | Користувач має доступ до медіа-контенту в системі                                                                                                                                  |
| **РЕЗУЛЬТАТ:**         | Користувач отримує аналізовану інформацію про медіа-контент                                                                                                                        |
| **ВИКЛЮЧНІ СИТУАЦІЇ:** | no_content - За запитом нічого не знайдено                                                                                                                                         |
| **ОСНОВНИЙ СЦЕНАРІЙ:** | 1. Користувач вибирає медіа-контент для аналізу <br/> 2. Система проводить аналіз обраного контенту <br/> 3. Система повертає результат аналізу користувачеві (можлива no_content) |

* **Моніторинг трендів**

| **ID:**                | trend_monitoring                                                                                                                                                                                                      |
|------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **НАЗВА:**             | Моніторинг трендів                                                                                                                                                                                                    |
| **УЧАСНИКИ:**          | Користувач, Система                                                                                                                                                                                                   |
| **ПЕРЕДУМОВИ:**        | Користувач має інтерес до відстеження трендів у медіа-просторі                                                                                                                                                        |
| **РЕЗУЛЬТАТ:**         | Користувач отримує інформацію про актуальні медіа-тренди                                                                                                                                                              |
| **ВИКЛЮЧНІ СИТУАЦІЇ:** | no_trends Немає актуальних трендів                                                                                                                                                                                    |
| **ОСНОВНИЙ СЦЕНАРІЙ:** | 1. Користувач вибирає опцію "Моніторинг трендів" <br/> 2. Система аналізує медіа-контент для виявлення актуальних трендів <br/> 3. Система повертає список актуальних медіа-трендів користувачеві (можлива no_trends) |

## Адміністратор

* **Надати додаткові права**

| **_ID:_**                | add_rights                                                                                                 |
| ------------------------ | -----------------------------------------------------------------------------------------------------------|
| **_НАЗВА:_**             | Надати додаткові права користувачу                                                                         |
| **_УЧАСНИКИ:_**          | Адміністратор, користувач, система                                                                         |
| **_ПЕРЕДУМОВИ:_**        | Користувач потребує додаткові права в системі                                                              |
| **_РЕЗУЛЬТАТ:_**         | Користувач отримує додаткові права в системі                                                               |
| **_ВИКЛЮЧНІ СИТУАЦІЇ:_** | user_not_found Корисувача не знайдено в системі                                                            |
|                          | already_has_rights Користувач вже має додаткові права в системі                                            |
|                          | rights_deny Адміністратор відмовляє користувачеві в наданні додаткових прав у системі                      |
| **_ОСНОВНИЙ СЦЕНАРІЙ:_** | 1. Користувач надає запит на отримання додаткових прав в системі                                           |
|                          | 2. Адміністратор отримує запит користувача на отримання додаткових прав в системі (можлива rights_deny)    |
|                          | 3. Адміністратор надає додаткові права користувачу в системі (можливі user_not_found та already_has_rights)|
|                          | 4. Користувач отримує додаткові права в системі                                                            |

* **Додати нове джерело**

| **_ID:_**                | add_source                                                                                                 |
| ------------------------ | -----------------------------------------------------------------------------------------------------------|
| **_НАЗВА:_**             | Додати нове джерело інформації в систему                                                                   |
| **_УЧАСНИКИ:_**          | Адміністратор, система                                                                                     |
| **_ПЕРЕДУМОВИ:_**        | Адміністратор хоче додати нове джерело інформації в систему                                                |
| **_РЕЗУЛЬТАТ:_**         | В систему успішно додано нове джерело інформації                                                           |
| **_ВИКЛЮЧНІ СИТУАЦІЇ:_** | invalid_source Джерело не дійсне                                                                           |
|                          | already_added_source Джерело вже було додано в систему раніше                                              |
| **_ОСНОВНИЙ СЦЕНАРІЙ:_** | 1. Адміністратор створює нове джерело інформації, натиснувши на кнопку "Додати джерело"                    |
|                          | 2. Адміністратор вводить посилання на джерело                                                              |
|                          | 3. Система проводить перевірку на валідність джерела (можливі invalid_source та already_added_source)      |
|                          | 4. Система додає нове джерело до списку доступних джерел інформації                                        |

* **Видалити обліковий запис користувача**

| **_ID:_**                | delete_account                                                                                             |
| ------------------------ | -----------------------------------------------------------------------------------------------------------|
| **_НАЗВА:_**             | Видалити обліковий запис користувача                                                                       |
| **_УЧАСНИКИ:_**          | Адміністратор, система                                                                                     |
| **_ПЕРЕДУМОВИ:_**        | Певний обліковий запис користувача має бути видалений з системи                                            |
| **_РЕЗУЛЬТАТ:_**         | Обліковий запис видалено з системи                                                                         |
| **_ВИКЛЮЧНІ СИТУАЦІЇ:_** | delete_deny Адміністратор відхиляє запит на видалення облікового запису                                    |
|                          | already_deleted Обліковий запис був видалений з системи раніше                                             |
| **_ОСНОВНИЙ СЦЕНАРІЙ:_** | 1. Адміністратор отримує запит на видалення облікового запису (можлива delete_deny)                        |
|                          | 2. Адміністратор дає згоду на видалення облікового запису                                                  |
|                          | 3. Система перевіряє наявність облікового запису користувача (можлива already_deleted)                     |
|                          | 4. Система видаляє обліковий запис користувача                                                             |


## Короткий огляд продукту

**MediaAnalyzer** - це високоефективна система для аналізу медіа-контенту, яка забезпечує збір, обробку та аналіз текстових, візуальних та аудіо-даних з різних джерел. Цей інструмент дозволяє користувачам отримувати глибоке розуміння медіа-ландшафту, виявляти ключові тренди та події.

Основні функції включають аналіз семантики тексту, розпізнавання об'єктів на зображеннях, сентимент-аналіз аудіо та відео, візуалізацію даних, а також можливість інтеграції з іншими системами для ще більш точного аналізу.

MediaAnalyzer корисний для медійних компаній, маркетингових агентств, політичних організацій, журналістів, бізнесів та індивідуальних користувачів, які прагнуть зрозуміти медіа-ландшафт, споживчі тенденції та публічну думку.

## Функціональність

Система володіє величезними можливостями, які дозволяють користувачам та адміністраторам ефективно взаємодіяти з ними. Простий та інтуїтивно зрозумілий інтерфейс сприяє зручності роботи з системою, дозволяючи використовувати всі її функції максимально ефективно.

**Можливості користувача:**
- Реєстрація та управління обліковим записом
- Створення та надсилання запитів на аналіз медіа-даних
- Настройка фільтрів для аналізу інформації
- Генерація звітів та представлення даних у візуальному вигляді
- Перегляд історії своїх запитів
- Порівняння результатів аналізу
- Експорт звітів з аналізу даних
- Звернення до служби підтримки або адміністратора

**Можливості адміністратора:**
- Управління користувачами та налаштуваннями доступу
- Конфігурація параметрів аналітики та пошуку
- Моніторинг продуктивності та ресурсів системи
- Захист конфіденційності та безпека даних
- Підтримка користувачів
- Моніторинг та адміністрування системних ресурсів
- Управління базами даних

## Практичність

Окрім обширності, також забезпечується практичність функцій системи.

- Зручний доступ до функцій сервісу
- Інтуїтивний інтерфейс користувача
- Можливість звернення до підтримки

## Надійність

Інструмент забезпечує безпеку користувача
- Зберігання даних користувачів в окремих сховищах
- Стійкість системи до збоїв і помилок
- Відновлення та резервне копіювання
- Заходи захисту від кібератак

## Продуктивність

- Ефективне використання ресурсів
- Швидкий аналіз контенту
- Масштабованість
- Використання сучасного хмарного хостингу

## Експлуатаційна придатність

- Проста установка та налаштування
- Використання актуальних технологій
- Регулярні оновлення та патчі