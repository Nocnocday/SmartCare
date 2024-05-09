const initialState = {
    account:{}
}
const rootReducer = (state= initialState,action)=>{
    switch(action.type){
        case 'account':
            return {
                ...state,
                account: {...action.payload}
            }
    }
}

export default rootReducer