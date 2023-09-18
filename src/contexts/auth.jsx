import { message } from "antd";
import React, { createContext, useContext, useEffect, useState } from "react";
import { get, post, setAuthHeader } from "../service/api";

const Authcontext = createContext({ login: (username, password) => {} });
const AuthProvider = ({ children }) => {
  const login = (username, password) => {
    post({
      url: "/login",
      data: { username: username, password: password },
    })
      .then(async (res) => {
        setAuthHeader(res.data.token);
        window.localStorage.setItem("id", res.data.id);
        window.location.href = "/";
      })
      .catch(() => {
        message.error("nhập sai thông tin");
      });
  };
  return (
    <Authcontext.Provider value={{ login }}>
      <>{children}</>
    </Authcontext.Provider>
  );
};
const useAuth = () => {
  return useContext(Authcontext);
};
export { AuthProvider, useAuth, Authcontext };
