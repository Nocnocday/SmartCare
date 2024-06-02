import http from "../utils/http";

export const getRoles=async ()=>{
   try{
    const res = await http.get('/classrooms')
    return res
   }
   catch(err){
    return err
   }
}