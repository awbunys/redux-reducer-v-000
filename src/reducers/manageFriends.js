export function manageFriends(state, action){
  if (action.type === 'ADD_FRIEND') {
    return {
      friend: [...state, action.payload]
    }
  }
  if (action.type !== action) {
    return {
      ...state
    };
  }
}
