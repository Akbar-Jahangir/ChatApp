import React, { useState } from "react";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";

const SignUp: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isName, setIsName] = useState<boolean>(true);
  const [isEmail, setIsEmail] = useState<boolean>(true);
  const [isPassword, setIsPassword] = useState<boolean>(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() == "" || name.trim().length < 2) {
      setIsName(false);
      console.log("name is invalid");
      return;
    } else {
      setIsName(true);
    }
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
      setIsEmail(false);
      return;
    } else {
      setIsEmail(true);
    }
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{6,}$/;
    if (!passwordPattern.test(password)) {
      setIsPassword(false);
      return;
    } else {
      setIsPassword(true);
    }
    console.log("submitted");
  };
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center space-y-4">
        <form
          onSubmit={handleSubmit}
          className="bg-smokeWhite w-[90%] max-w-[380px] shadow-xl p-4 rounded space-y-4 font-inter flex flex-col items-center py-12"
        >
          <p className="text-3xl font-semibold text-primary mb-4">Sign Up</p>
          <div className="w-full">
            <Input
              type="text"
              placeholder="Full Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              className={`${
                !isName ? "border border-red-600 rounded" : ""
              } rounded px-4 py-2 focus:outline-none w-full shadow-lg`}
            />
            {!isName && <p className="text-red-600 text-sm">name is invalid</p>}
          </div>
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
            labelText="Sign Up"
         />
        </form>
        <div>
          <span>Already have an account?</span>{" "}
          <Button
            type="button"
            labelText="Sign In"
            className="text-primary font-semibold text-xl"
            onClick={() => navigate("signIn")}
          />
        </div>
      </div>
    </>
  );
};

export default SignUp;
