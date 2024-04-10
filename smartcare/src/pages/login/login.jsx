import { Link } from "react-router-dom";
import { Button, Input } from "../../components/atoms";

function Login() {
  return (
    <div className="flex justify-between items-center min-h-[60vh] w-[50%] h-auto m-auto shadow-xl rounded-lg absolute translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%]">
      <div className="w-[50%] justify-center items-center flex">
        <img
          src="/images/img_login.png"
          alt="img"
          className="w-[80%] h-[80%] "
        />
      </div>
      <div className="flex-1 flex-col text-center p-[20px]">
        <h5 style={{ fontWeight: "bold" }} className="mb-[20px]">
          Login
        </h5>
        <form className="m-auto">
          <div className="text-left mb-[32px]">
            <label htmlFor="email" className="block mb-[8px]">
              Email:
            </label>
            <input
              placeholder="Email address"
              id="email"
              className="outline-none p-[8px] bg-transparent border border-sidebar w-[100%] h-[40px] rounded"
            />
          </div>
          <div className="text-left">
            <label htmlFor="password" className="block mb-[8px]">
              Password:
            </label>
            <input
              placeholder={"Password"}
              id="password"
              className="outline-none p-[8px] bg-transparent border border-sidebar w-[100%] h-[40px] rounded"
            />
          </div>
          <div className="flex inline-block items-center mt-[16px] items-end">
            <input type="checkbox" className="w-[16px] h-[16px] mr-[8px]" />
            <span>Remember me</span>
            <Link className="flex-1 text-right  text-sidebar">
              Forgot password?
            </Link>
          </div>
          <Button classButton={"rounded w-[100px]"}>Login</Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
