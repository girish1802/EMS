import Login from "./component/Auth/Login";
import AdminDashboard from "./component/Dashboard/AdminDashboard";
import EmployeeDashboard from "./component/Dashboard/EmployeeDashboard";
import { getlocalStorage, setlocalStorage } from "./utils/LocalStorage";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    setlocalStorage();
    getlocalStorage();
  });

  return (
    <>
      <Login />
      {/* <EmployeeDashboard /> */}
      {/* <AdminDashboard /> */}
    </>
  );
}
