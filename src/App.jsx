import Login from "./component/Auth/Login";
import AdminDashboard from "./component/Dashboard/AdminDashboard";
import EmployeeDashboard from "./component/Dashboard/EmployeeDashboard";
import { getlocalStorage, setlocalStorage } from "./utils/LocalStorage";
import { useEffect, useState } from "react";

export default function App() {
  const [user, setUser] = useState(null);

  const handlelogin = (email, password) => {
    //login check
    if (email == "admin@me.com" && password == "123") {
      setUser("admin");
      console.log("this is admin");
    } else if (email == "user@me.com" && password == "123") {
      setUser("user");
      console.log("this is user");
    } else {
      alert("invalid creditonals");
    }
  };

  return (
    <>
      {!user ? <Login handled={handlelogin} /> : ""}
      {user == "admin" ? <AdminDashboard /> : <EmployeeDashboard />}

      {/* <EmployeeDashboard /> */}
      {/* <AdminDashboard /> */}
    </>
  );
}
