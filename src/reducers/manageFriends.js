export function manageFriends(state, action){
  if (action.type === 'REMOVE_FRIEND') {
    let index = state.friends.findIndex(x => x.id === action.id)
    return index
  }
  if (action.type === 'ADD_FRIEND') {
    return {
      friends: [...state.friends, action.friend]
    }
  }
  if (action.type !== action) {
    return {
      ...state
    };
  }
}
