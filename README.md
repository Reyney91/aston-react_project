[![Netlify Status](https://api.netlify.com/api/v1/badges/9f60a7bd-a16e-4c7a-9524-e8eca97efd28/deploy-status)](https://app.netlify.com/sites/aston-reactproject/deploys)
![workflow](https://github.com/Reyney91/aston-react_project/actions/workflows/main.yml/badge.svg)

# Films project

- Приложения для поиска фильмов
- [Deploy приложения](https://aston-reactproject.netlify.app/)
- Используемое API [Kinopoisk API Unofficial](https://kinopoiskapiunofficial.tech/)

## Локальный запуск

Установка зависимостей:
```javascript
npm install
```
Запуск приложения:
```javascript
npm run dev
```

## Требования

### 1 уровень (обязательный)

- [x] Реализованы Требования к функциональности.
- [x] Для хранения учетных записей пользователей, их Избранного и Истории поиска, используется [LocalStorage](https://github.com/Reyney91/aston-react_project/blob/main/src/app/hooks/useAuth.ts) + [Firebase](https://github.com/Reyney91/aston-react_project/blob/main/src/app/hooks/useFavorites.ts).
- [x] Пишем функциональные компоненты c хуками в приоритете над классовыми.
- [x] Есть разделение на [умные](https://github.com/Reyney91/aston-react_project/blob/main/src/widgets/Header.tsx) и [глупые](https://github.com/Reyney91/aston-react_project/blob/main/src/widgets/HeaderLayout.tsx) компоненты.
- [x] Есть рендеринг [списков](https://github.com/Reyney91/aston-react_project/blob/main/src/widgets/FilmsList.tsx).
- [x] Реализована хотя бы одна [форма](https://github.com/Reyney91/aston-react_project/blob/main/src/features/FilmSearch.tsx).
- [x] Есть применение [Контекст API](https://github.com/Reyney91/aston-react_project/blob/main/src/App.tsx).
- [x] Есть применение [предохранителя](https://github.com/Reyney91/aston-react_project/blob/main/src/App.tsx).
- [x] Есть хотя бы один [кастомный хук](https://github.com/Reyney91/aston-react_project/blob/main/src/app/hooks/useAuth.ts).
- [x] Хотя бы несколько компонентов используют PropTypes [тут](https://github.com/Reyney91/aston-react_project/blob/main/src/widgets/LoadingLayout.tsx), [тут](https://github.com/Reyney91/aston-react_project/blob/main/src/shared/ui/HistoryItem.tsx) и [тут](https://github.com/Reyney91/aston-react_project/blob/main/src/widgets/SearchSuggestions.tsx).
- [x] Поиск не должен триггерить много [запросов к серверу](https://github.com/Reyney91/aston-react_project/blob/main/src/app/hooks/useDebounce.ts).
- [x] Есть применение [lazy](https://github.com/Reyney91/aston-react_project/blob/main/src/shared/router/routes.tsx) + [Suspense](https://github.com/Reyney91/aston-react_project/blob/main/src/shared/router/router.tsx).
- [x] Используем [Modern Redux with Redux Toolkit](https://github.com/Reyney91/aston-react_project/blob/main/src/app/store/store.ts).
- [x] Используем [слайсы](https://github.com/Reyney91/aston-react_project/blob/main/src/app/store/favoritesSlice.ts).
- [x] Есть хотя бы одна [кастомная мидлвара](https://github.com/Reyney91/aston-react_project/blob/main/src/app/store/middlewares/middleware.ts).
- [x] Используется [RTK Query](https://github.com/Reyney91/aston-react_project/blob/main/src/app/api/apiSlice.ts).
- [x] Используется [Transforming Responses](https://github.com/Reyney91/aston-react_project/blob/main/src/app/api/apiSlice.ts)

### 2 уровень (необязательный)

- [x] Использование TypeScript.
- [x] Использование [Firebase](https://github.com/Reyney91/aston-react_project/blob/main/src/app/hooks/useHistory.ts).
- [x] Низкая связанность клиентского кода с хранилищем. *Считаю этот пункт выполненным потому что управление LS и Firebase у находится только в [кастомных хуках](https://github.com/Reyney91/aston-react_project/blob/main/src/app/hooks/useAuth.ts) по их управлению и в одном [слое стора](https://github.com/Reyney91/aston-react_project/blob/main/src/app/store/authSlice.ts)*
- [x] Настроен [CI/CD](https://github.com/Reyney91/aston-react_project/blob/main/.github/workflows/main.yml).
- [x] Используются [мемоизированные селекторы](https://github.com/Reyney91/aston-react_project/tree/main/src/app/store/selectors)
- [ ] Добавлены тесты.

## **Дополнительно**

- [Feature-Sliced Design](https://feature-sliced.design/ru/)
- [Chakra UI](https://v2.chakra-ui.com/)
- [React hook form](https://react-hook-form.com/)
- [Netlify](https://app.netlify.com/)
