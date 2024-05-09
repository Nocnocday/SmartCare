import http from "../utils/http";

export const login=async (data)=>{
   try{
    const res = await http.post('/login',data)
    return res
   }
   catch(err){
    return err
   }
}