This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
Deployed at http://jammmdersen.surge.sh.

## 1 уровень (необходимый минимум)

## React

<li> Пишем функциональные компоненты c хуками в приоритете над классовыми. ✔️
<li> Есть четкое разделение на умные и глупые компоненты. ✔️
(<a href="https://github.com/lahinouski/jammmdersen/blob/main/src/Components/SearchBar/SearchBar.js">SearchBar</a>, 
<a href="https://github.com/lahinouski/jammmdersen/blob/main/src/Components/HistoryCard/HistoryCard.js">HistoryCard</a>)
<li> Есть рендеринг списков. ✔️
(<a href="https://github.com/lahinouski/jammmdersen/blob/main/src/Components/TrackList/TrackList.js">TrackList</a>)
<li> Реализована хотя бы одна форма. ✔️
(<a href="https://github.com/lahinouski/jammmdersen/blob/main/src/Pages/LogIn/LogIn.js">LogIn</a>)
<li> Есть применение Контекст API. ✔️
(<a href="https://github.com/lahinouski/jammmdersen/blob/main/src/index.js">index</a>)
<li> Есть применение предохранителя. ✔️
(<a href="https://github.com/lahinouski/jammmdersen/blob/main/src/Components/App/App.js">App</a>)
<li> Есть хотя бы один кастомный хук. ✔️
(<a href="https://github.com/lahinouski/jammmdersen/blob/main/src/Components/TrackList/useTrackList.js">useTrackList</a>)
<li> Хотя бы несколько компонентов используют PropTypes. ✔️
(<a href="https://github.com/lahinouski/jammmdersen/blob/main/src/Components/Button/Button.js">Button</a>, 
<a href="https://github.com/lahinouski/jammmdersen/blob/main/src/Components/FavoriteCard/FavoriteCard.js">FavoriteCard</a>)
<li> Поиск не должен триггерить много запросов к серверу. ✔️
(<a href="https://github.com/lahinouski/jammmdersen/blob/main/src/Components/SearchBar/SearchBar.js">SearchBar</a>)

## Redux

<li> Используем Modern Redux with Redux Toolkit. ✔️
<li> Используем слайсы. ✔️
(<a href="https://github.com/lahinouski/jammmdersen/blob/main/src/features/currentUserUsernameSlice.js">currentUserUsernameSlice</a>)
<li> Есть хотя бы одна кастомная мидлвара. ✔️
(<a href="https://github.com/lahinouski/jammmdersen/blob/main/src/features/loggerMiddleware.js">loggerMiddleware</a>)
<li> Используется RTK Query.
<li> Используется Transforming Responses.

## 2 уровень (необязательный)

<li> Проведена оптимизация приложения.
<li> Используются мемоизированные селекторы.
<li> Используется нормализованная структура стейта.
<li> Подключен storybook и созданы несколько сторисов. ✔️
(<a href="https://github.com/lahinouski/jammmdersen/blob/main/src/stories/Button.stories.js">Button</a>)
<li> Использование TypeScript.