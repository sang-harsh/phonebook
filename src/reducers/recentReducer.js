export function recentReducer(state=[],action){
      const maxSize=10;
      switch(action.type){
            case 'ADD_RECENT':
                  let copyOfRecentState = [...state];
                  if(copyOfRecentState.length===maxSize){
                        copyOfRecentState.shift();
                  }
                  copyOfRecentState.push(action.payload);
                  return copyOfRecentState;
            default: 
                  return state;     
      }
}