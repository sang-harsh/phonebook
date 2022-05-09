export function newContactReducer(state={
      name: '',
      mobile: '',

},action){
      switch(action.type){
            case 'CHANGE_NAME':
                  return {...state,name:action.payload}
            case 'CHANGE_MOBILE':
                  return {...state,mobile:action.payload}
            default:
                  return state;
      }
}