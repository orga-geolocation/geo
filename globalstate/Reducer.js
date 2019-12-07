export const initialstate={
    login:false,
    user:null,
    register:false,
    modalVisible:false,
    userData:null,
    mode:""
}

export default Reducer=(state,action)=>{
    switch(action.type){
        case "switch":
            return {...state,register:!action.payload}
        case "switchmodal":
                return {...state,modalVisible:!action.payload}
        case "setuser":
            return {...state,user:action.payload}
        case "setuserdata":
            return {...state,userData:action.payload}
        case "setmode":
            return {...state,mode:action.payload}
        default:
            return state;
    }
}