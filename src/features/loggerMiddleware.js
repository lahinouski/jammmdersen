import { createStore, applyMiddleware } from 'redux';

const loggerMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case 'SIGN IN':
      console.log(`An account has been created. Username: ${action.payload}.`);
      return next(action);
    case 'LOG IN':
      console.log(`User ${action.payload} is now logged in.`);
      return next(action);
    default:
      return next(action);
  }
};

const middleware = applyMiddleware(loggerMiddleware);
const store = createStore(() => null, middleware);

export default store;