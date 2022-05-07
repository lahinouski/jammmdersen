This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

# 1 уровень (необходимый минимум)

## React

Пишем функциональные компоненты c хуками в приоритете над классовыми. ✔️
Есть четкое разделение на умные и глупые компоненты. ✔️ 
( <a href="https://github.com/Liana666/anime-project/tree/develop/src/components/details">Details</a>, 
<a href="https://github.com/Liana666/anime-project/tree/develop/src/components/favorites">Favorites</a>,
<a href="https://github.com/Liana666/anime-project/tree/develop/src/components/filter">Filter</a>... )
Есть рендеринг списков. ✔️ 
( <a href="https://github.com/Liana666/anime-project/blob/develop/src/components/anime/AnimeList/AnimeList.tsx">AnimeList</a>,
<a href="https://github.com/Liana666/anime-project/blob/develop/src/components/favorites/FavoritesAnime/FavoritesAnime.tsx">FavoritesAnime</a>,
<a href="https://github.com/Liana666/anime-project/blob/develop/src/components/history/HistoryList/HistoryList.tsx">HistoryList</a>... )
Реализована хотя бы одна форма. ✔️ 
( <a href="https://github.com/Liana666/anime-project/blob/develop/src/components/auth/Form/Form.tsx">Form</a> )
Есть применение Контекст API. ✔️
( <a href="https://github.com/Liana666/anime-project/blob/develop/src/index.tsx">index</a> )
Есть применение предохранителя. ✔️ 
( <a href="https://github.com/Liana666/anime-project/blob/develop/src/components/anime/AnimeList/AnimeListContainer.tsx">AnimeListContainer</a>, 
<a href="https://github.com/Liana666/anime-project/blob/develop/src/components/details/DetailsAnimeContainer.tsx">DetailsAnimeContainer</a> )
Есть хотя бы один кастомный хук. ✔️  
( <a href="https://github.com/Liana666/anime-project/tree/develop/src/hooks">hooks</a> )
Хотя бы несколько компонентов используют PropTypes. ✔️  
( <a href="https://github.com/Liana666/anime-project/blob/develop/src/components/update/UpdateAnime.tsx">UpdateAnime</a>, 
<a href="https://github.com/Liana666/anime-project/blob/develop/src/components/auth/Form/Form.tsx">Form</a> )
Поиск не должен триггерить много запросов к серверу. ✔️ Поиск триггериться только по нажатию кнопки.

## Redux

Используем Modern Redux with Redux Toolkit . ✔️  
( <a href="https://github.com/Liana666/anime-project/tree/develop/src/store">store</a> )
Используем слайсы. ✔️  
( <a href="https://github.com/Liana666/anime-project/tree/develop/src/store/slices">slices</a> )
Есть хотя бы одна кастомная мидлвара. ✔️  
( <a href="https://github.com/Liana666/anime-project/blob/develop/src/store/middleware/customMiddleWare.ts">middleware</a> )
Используется RTK Query. ✔️  
( <a href="https://github.com/Liana666/anime-project/blob/develop/src/store/api/animeApi.ts">animeApi</a> )
Используется Transforming Responses. ✔️  
( <a href="https://github.com/Liana666/anime-project/blob/develop/src/store/api/animeApi.ts">animeApi</a> )

# 2 уровень (необязательный)

Проведена оптимизация приложения. 
Используются мемоизированные селекторы. ✔️ 
( <a href="https://github.com/Liana666/anime-project/blob/develop/src/store/selectors/selectors.ts">selectors</a> )
Используется нормализованная структура стейта.  
Подключен storybook и созданы несколько сторисов. ✔️ 
( <a href="https://github.com/Liana666/anime-project/tree/develop/src/components/shared/Button">Button</a>,
<a href="https://github.com/Liana666/anime-project/tree/develop/src/components/shared/Input">Input</a> )
Использование TypeScript. ✔️