export function allContactsReducer(state =[
      {
            id: 0, name: "Jason Statham", mobile: "9865745612", isFav: false
      },
      {     
            id: 1,  name: "Brad Pitt", mobile: "9865745612", isFav: false
      },
      {
            id: 2, name: "Edward Norton", mobile: "9865745612",isFav: false
      },
      {
            id: 3, name: "Christian Bale",  mobile: "9865745612", isFav: false
      },
],action){
      switch(action.type){
            case 'NEW_CONTACT':
                  return [...state,
                        {...action.payload,isFav: false,id: ( state? state[state.length-1].id+1: 0)}]
            case 'TOGGLE_FAV':
                  let copyState = [...state];
                  copyState.forEach((element,i)=>{
                        if(action.payload===element.id){
                              copyState[i].isFav =  !state[i].isFav
                        }
                  })
                  return copyState
            default: 
                  return state
      }
}