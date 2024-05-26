export const getAccount = (data)=>{
    return {
        type:'account',
        payload:data
    }
}
export const addClassrooms = (data)=>{
    return {
        type:'CLASSROOM',
        payload:data
    }
}