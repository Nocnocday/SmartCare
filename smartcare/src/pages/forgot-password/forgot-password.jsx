import { useEffect, useState } from "react";
import { forgotPassword } from "../../services/forgotServices";
import { showToast } from "../../utils/utils";

function ForgotPasword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit =async (e) => {
    e.preventDefault();
    const formData = new FormData()
    formData.append('email', email);
  const res = await forgotPassword(formData);
  if(res?.success === false){
    showToast(res?.msg)
  }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Quên mật khẩu</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:border-[#99a799]"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#99a799] text-white py-2 px-4 rounded hover:bg-[#99a799]"
          >
            Gửi
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPasword;
