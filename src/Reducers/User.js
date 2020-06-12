const initialState = {
    isLogged: false,
    username: null,
  };
  
  const user = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          isLogged: action.value,
        };
      case 'UPDATE_USERNAME':
        return {
          ...state,
          username: action.username,
        };
      case 'LOGOUT':
        return initialState;
      default:
        return state;
    }
  };
  
  export default user;