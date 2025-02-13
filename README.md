# Домашнє завдання №1

## Завдання 1 - Профіль соціальної мережі

Необхідно створити компонент `<Profile>`, за допомогою якого ми могли б відображати інформацію про користувача соціальної мережі.

Компонент повинен приймати кілька пропсів з інформацією про користувача:

- `name` — ім'я користувача
- `tag` — тег в соціальній мережі без @
- `location` — місто і країна
- `image` — посилання на зображення
- `stats` — об'єкт з інформацією про активності

Компонент повинен створювати розмітку наступної структури, але з динамічними даними, що надходять у вигляді описаних раніше пропсів.

```html
<div>
  <div>
    <img
      src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
      alt="User avatar"
    />
    <p>Petra Marica</p>
    <p>@pmarica</p>
    <p>Salvador, Brasil</p>
  </div>

  <ul>
    <li>
      <span>Followers</span>
      <span>1000</span>
    </li>
    <li>
      <span>Views</span>
      <span>2000</span>
    </li>
    <li>
      <span>Likes</span>
      <span>3000</span>
    </li>
  </ul>
</div>
```

## Завдання 2 - Список друзів

Необхідно створити компонент `<FriendList>`, за допомогою якого ми могли б відображати інформацію про друзів користувача.

Компонент `<FriendList>` повинен приймати один проп `friends` - масив об'єктів друзів і створювати DOM розмітку наступної структури:

```jsx
<ul>
  {/* Кількість li залежить від кількості об'єктів в масиві */}
  <li>
    <FriendListItem />
  </li>
</ul>
```

Компонент `<FriendListItem>` - це картка одного друга, яка повинна приймати кілька пропсів:

- **avatar** - посилання на аватар
- **name** - ім'я друга
- **isOnline** - буль, що сигналізує про стан друга: в мережі або ні.

Компонент `<FriendListItem>` повинен створювати DOM розмітку наступної структури:

```jsx
<div>
  <img src="{avatar}" alt="Avatar" width="48" />
  <p>{name}</p>
  <p>{isOnline ? "Online" : "Offline"}</p>
</div>
```

## Завдання 3 - Історія транзакцій

Необхідно створити компонент історії транзакцій в особистому кабінеті інтернет-банку.

Дані для списку доступні у форматі масиву об'єктів, де кожен об'єкт описує одну транзакцію з наступними властивостями:

- **id** — унікальний ідентифікатор транзакції
- **type** — тип транзакції
- **amount** - сума транзакції
- **currency** - тип валюти

Компонент `<TransactionHistory>` приймає один проп `items` - масив об'єктів транзакцій і створює розмітку таблиці. Кожна транзакція представлена рядком таблиці.

Компонент створює таблицю з такою структурою:

```jsx
<table>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {/* Виведення транзакцій */}
    <tr>
      <td>Invoice</td>
      <td>125</td>
      <td>USD</td>
    </tr>
    <tr>
      <td>Withdrawal</td>
      <td>85</td>
      <td>USD</td>
    </tr>
  </tbody>
</table>
```
