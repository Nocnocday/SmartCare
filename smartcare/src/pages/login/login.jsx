import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";
import { Button, Input } from "../../components/atoms";
import { login } from "../../services";
import { getAccount } from '../../redux/action'
import {pathAdmin,pathAssisstant} from '../../utils/path'
import { showToast } from "../../utils/utils";

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
        showToast("Username hoặc password sai");
      }
      else if(res.status == "ERR_NETWORK"){
        showToast("Lỗi kết nối...");
      }
      // Thành công, be chưa trả status
      else{
        const {user,status} = res
        if(status=='success'){
          showToast("Thành công");
          sessionStorage.setItem("token",user.token)
          dispatch(getAccount(user))
          if(user.role?.[0] == 'admin'){
            navigate(pathAdmin.STATISTICS)
          }else{
            navigate(pathAssisstant.MANAGE_FEE)
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
            <label htmlFor="username" className="block mb-[8px]">
              Username:
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
            <Link to={'/forgot-password'} className="flex-1 text-right  text-sidebar">
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
