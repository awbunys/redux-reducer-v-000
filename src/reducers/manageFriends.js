export function manageFriends(state, action){
  if (action.type === 'REMOVE_FRIEND') {
    let newArr = [...state.friends]
    let index = newArr.findIndex(x => x.id === action.id)

    (function () {
    newArr.splice(index, 1)
})();
    return newArr
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
