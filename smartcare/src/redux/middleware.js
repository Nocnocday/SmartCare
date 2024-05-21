export const sessionStorageMiddleware = store => next => action => {
    const result = next(action);
    
    sessionStorage.setItem('reduxState', JSON.stringify(store.getState()));
    
    return result;
  };
  