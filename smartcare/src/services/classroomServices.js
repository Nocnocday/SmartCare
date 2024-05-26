import http from "../utils/http";

export const getClassrooms=async ()=>{
   try{
    const res = await http.get('/classrooms')
    return res
   }
   catch(err){
    return err
   }
}