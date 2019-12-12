export const initialstate = {
    login: false,
    user: null,
    register: false,
    modalVisible: false,
    userData: null,
    mode: "",
    lat: null,
    long: null,
    id: 0
}

export default Reducer = (state, action) => {
    switch (action.type) {
        case "switch":
            return { ...state, register: !action.payload }
        case "switchmodal":
            return { ...state, modalVisible: !action.payload }
        case "setuser":
            return { ...state, user: action.payload }
        case "setuserdata":
            return { ...state, userData: action.payload }
        case "setmode":
            return { ...state, mode: action.payload }
        case "lat":
            return { ...state, lat: action.payload }
        case "long":
            return { ...state, long: action.payload }
        case "id":
            return { ...state, id: action.payload }
        case "login":
            return { ...state,login:!action.payload}
        default:
            return state;
    }
}