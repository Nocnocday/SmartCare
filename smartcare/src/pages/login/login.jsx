import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";
import { Button, Input } from "../../components/atoms";
import { login } from "../../services";
import { getAccount } from '../../redux/action'
import {pathAdmin} from '../../utils/path'

function Login() {
  const dispatch= useDispatch()
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false);
  const [body, setData] = useState({ username: "", password: "" });

  useEffect(() => {
    const submit = document.querySelector("#submit");
    if (body.username == "" || body.password == "") {
      submit.style.background = "#ccc";
    } else {
      submit.style.removeProperty("background");
    }
  }, [body]);

  let handleLogin = async () => {
    const submit = document.querySelector("#submit");
    if (body.username == "" || body.password == "") {
      return;
    }
    try {
      setIsLoading(true);
      submit.style.background = "#ccc";
      const res = await login(body);
      if (res.status == 401) {
        toast.error(res.data.message);
      }
      // Thành công, be chưa trả status
      else{
        const {data} = res
        if(data && data.token){
          toast.success("Thành công");
          localStorage.setItem("token",data.token)
          dispatch(getAccount(data))
          console.log(data.role?.[0]);
          if(data.role?.[0] == 'admin'){
            navigate(pathAdmin.STATISTICS)
          }else{
            console.log('chạy vào đây');
          }
        }
      }
    } catch (err) {
    } finally {
      submit.style.removeProperty("background");
      setIsLoading(false);
    }
  };
  return (
    <div className="flex justify-between items-center min-h-[60vh] w-[50%] h-auto m-auto shadow-xl rounded-lg absolute translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%]">
      <div className="w-[50%] justify-center items-center flex">
        <img src="/images/logo.png" alt="img" className="w-[80%] h-[80%] " />
      </div>
      <div className="flex-1 flex-col text-center p-[20px]">
        <h5 style={{ fontWeight: "bold" }} className="mb-[20px]">
          Login
        </h5>
        <div className="m-auto">
          <div className="text-left mb-[32px]">
            <label htmlFor="email" className="block mb-[8px]">
              Email:
            </label>
            <Input
              onBlur={(e) => {
                setData((data) => ({
                  ...data,
                  username: e.target.value.trim(),
                }));
              }}
              placeholder="Email address"
              id="email"
              className="outline-none p-[8px] border border-sidebar w-[100%] h-[40px] rounded"
            />
          </div>
          <div className="text-left">
            <label htmlFor="password" className="block mb-[8px]">
              Password:
            </label>
            <Input
              onBlur={(e) => {
                setData((data) => ({
                  ...data,
                  password: e.target.value.trim(),
                }));
              }}
              type={"password"}
              placeholder={"Password"}
              id="password"
              className="outline-none p-[8px] border border-sidebar w-[100%] h-[40px] rounded"
            />
          </div>
          <div className="flex inline-block items-center mt-[16px] items-end">
            <input type="checkbox" className="w-[16px] h-[16px] mr-[8px]" />
            <span>Remember me</span>
            <Link className="flex-1 text-right  text-sidebar">
              Forgot password?
            </Link>
          </div>
          <Button
            id="submit"
            classButton={"rounded w-[100px] relative h-[30px]"}
            handleClick={handleLogin}
            style={{boxSizing:'border-box'}}
          >
            {isLoading ? <FaSpinner className="loading" /> : "Login"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
