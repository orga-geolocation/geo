export const initialstate={
    login:false,
    user:"",
    register:false,
    modalVisible:false
}

export default Reducer=(state,action)=>{
    switch(action.type){
        case "switch":
            return {...state,register:!action.payload}
        case "switchmodal":
                return {...state,modalVisible:!action.payload}
        case "setuser":
            return {...state,user:action.payload}
        default:
            return state;
    }
}