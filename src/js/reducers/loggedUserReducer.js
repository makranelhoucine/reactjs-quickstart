export default function reducer(state={
    currentUser: {
      name: null,
      username: null,
    },
    error: null,
  }, action) {
    switch (action.type) {      
      case "GET_LOGGED_USER": {
        return {
          ...state,
          currentUser: action.payload,
        }
      }      
    }
    return state
}
