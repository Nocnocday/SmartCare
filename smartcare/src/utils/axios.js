import axios from 'axios'

const instance = axios.create({
    baseURL:'http://127.0.0.1:8000/api'
})

function getToken() {
    return sessionStorage.getItem('token');
}

instance.interceptors.request.use(function (config) {
    const token = getToken();
    if (config.url !== '/login' && token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

instance.interceptors.response.use(function (response) {
    return response.data;
  }, function (error) {
    console.log(error.response);
      let res = {}
   if(error.response){
    res.data = error.response.data
    res.status = error.response.status
    res.headers = error.response.headers
   }else if(error.code == "ERR_NETWORK"){
    res.status = error.code
    res.message = error.message
   }else{

   }
    return res
  });
export default instance