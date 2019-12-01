export const initialstate={
    login:false,
    user:"",
    register:false
}

export default Reducer=(state,action)=>{
    switch(action.type){
        case "switch":
            return {...state,register:!action.payload}
        default:
            return state;
    }
}