import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/Auth";
import { logout } from "../../store/AuthSlice";

function LogoutBtn() {
  const disptach = useDispatch();

  const logoutHandler = () => {
    authService.logout().then(() => {
      disptach(logout());
    });
  };
  return (
    <button
      className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;