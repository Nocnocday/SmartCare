import http from "../utils/http";

export const studentsService=async (page)=>{
   try{
    const res = await http.get(`/students?page=${page}`)
    return res
   }
   catch(err){
    return err
   }
}