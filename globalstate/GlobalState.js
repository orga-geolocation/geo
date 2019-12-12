import {createContext} from "react"

const initialstate={
    login:false,
    user:"",
    register:true,
    modalVisible:false,
    userData:null,
    mode:"",
    lat:null,
    long:null,
    id:0
}

export default GlobalState=createContext(initialstate)