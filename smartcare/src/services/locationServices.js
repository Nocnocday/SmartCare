import http from "../utils/http";

export const getProvinces=async ()=>{
   try{
    const res = await http.get('/location/provinces')
    return res
   }
   catch(err){
    return err
   }
}
export const getDistricts=async (idProvince)=>{
    try{
     const res = await http.get('/location/districts/'+idProvince)
     return res
    }
    catch(err){
     return err
    }
 }
 export const getWards=async (idDistrict)=>{
    try{
     const res = await http.get('/location/wards/'+idDistrict)
     return res
    }
    catch(err){
     return err
    }
 }