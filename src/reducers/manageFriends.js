export function manageFriends(state, action){
  if (action.type === 'ADD_FRIEND') {
    return {
      friends: ['why isnt this working']
    }
  }
  if (action.type !== action) {
    return {
      ...state
    };
  }
}
