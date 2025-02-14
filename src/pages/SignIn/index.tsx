import React, { useState } from "react";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isEmail, setIsEmail] = useState<boolean>(true);
  const [isPassword, setIsPassword] = useState<boolean>(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (email === "") {
      console.log("email");
      setIsEmail(false);
      return;
    } else {
      setIsEmail(true);
    }
    if (password.trim() == "" || password.trim().length < 6) {
      console.log("pass is invalid");
      setIsPassword(false);

      return;
    } else {
      setIsPassword(true);
    }
   navigate("/home")
  };
  const navigate=useNavigate()
  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center space-y-4">
        <form
          onSubmit={handleSubmit}
          className="bg-smokeWhite w-[90%] max-w-[380px] shadow-xl p-4 rounded space-y-4 font-inter flex flex-col items-center py-12"
        >
          <p className="text-3xl font-semibold text-primary mb-4">Sign In</p>
         
          <div className="w-full">
            <Input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="rounded px-4 py-2 focus:outline-none w-full shadow-lg"
            />
            {!isEmail && (
              <p className="text-red-600 text-sm">email is invalid</p>
            )}
          </div>
          <div className="w-full">
            <Input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="rounded px-4 py-2 focus:outline-none w-full shadow-lg"
            />
            {!isPassword && (
              <p className="text-red-600 text-sm">password is invalid</p>
            )}
          </div>
          <Button
            type="submit"
            className="bg-primary p-1 text-lg font-semibold rounded-md text-white w-full flex justify-center"
            labelText="Sign In"
          />
        </form>
        <div>
          <span>Don't have an account?</span>{" "}
          <Button type="button" className="text-primary font-semibold text-xl" onClick={() => navigate("signUp")} labelText="Sign Up"/>

        </div>
      </div>
    </>
  );
};

export default SignIn;
