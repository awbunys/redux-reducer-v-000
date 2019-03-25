export function manageFriends(state, action){
  if (action.type === 'ADD_FRIEND') {
    return {
      friends: [...state, action.payload]
    }
  }
  if (action.type !== action) {
    return {
      ...state
    };
  }
}
