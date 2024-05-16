import http from "../utils/http";

export const schedule=async ()=>{
   try{
    const res = await http.get('/meal-schedules')
    return res
   }
   catch(err){
    return err
   }
}