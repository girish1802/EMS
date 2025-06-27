import React, { use, useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const sumbitHandler = (e) => {
    e.preventDefault();
    console.log("this email", email);
    console.log("this Password", password);
  };
  return (
    <>
      <div className="flex h-screen w-screen items-center justify-center">
        <div className="border-2 border-emerald-600 rounded-xl p-5">
          <form
            onSubmit={(e) => {
              sumbitHandler(e);
            }}
            action=""
            className="m-10 flex flex-col items-center justify-center"
          >
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="text"
              required
              placeholder="Enter Your Email"
              className="bg-emerald-100 text-white outline-none bg-transparent border-emerald-600 rounded-full py-3 px-5 m-2 border-2 border-emerald-600 placeholder:text-grey-500"
            />
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              required
              placeholder="Enter Your Password"
              className="bg-emerald-100  text-white  outline-none bg-transparent border-emerald-600 rounded-full py-3 px-5 m-2 border-2 border-emerald-600  placeholder:text-grey-500"
            />
            <button
              type="submit"
              className=" rounded-full py-3 px-5 mt-7 border-none bg-emerald-600 text-white px-24"
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
