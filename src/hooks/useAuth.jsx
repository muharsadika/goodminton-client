import { useState } from "react";
import { useDispatch } from "react-redux";
import { AUTH_LOGOUT } from "../stores/RootReducer";
import { useNavigate } from "react-router-dom";
import { API } from "../libs/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

function useAuth() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [registered, setRegistered] = useState(false);
  const [registerForm, setRegisterForm] = useState({
    email: "",
    password: "",
    fullname: "",
    username: "",
  });

  function handleChange(e) {
    setRegisterForm({
      ...registerForm,
      [e.target.name]: e.target.value,
    });
  }

  const { mutate, isPending, error } = useMutation({
    mutationFn: async () => {
      await API.post("/buyer/register", registerForm);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["buyerRegister"] });
      setRegistered(true);
    },
    onError: (error) => {
      console.log(error.response.data.data.message);
    },
  });

  const { mutate: mutateLogin, error: errorLogin } = useMutation({
    mutationFn: async () => {
      const response = await API.post("/buyer/login", {
        username: registerForm.username,
        password: registerForm.password,
      });
      localStorage.setItem("token", response.data.data.token);
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ["buyerLogin"] });
      if (registerForm.username === "admin@mail.com") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    },
    onError: (error) => {
      console.log(error.response.data.data.message);
    },
  });

  function jumpToLogin() {
    setRegistered(!registered);
  }

  async function handleLogout() {
    try {
      dispatch(AUTH_LOGOUT());
      setRegistered(false);
      console.log("user logout");
      navigate("/login");
    } catch (error) {
      console.error("Error logout:", error);
    }
  }

  return {
    handleLogout,
    handleChange,
    mutate,
    mutateLogin,
    jumpToLogin,
    isPending,
    registerForm,
    error,
    errorLogin,
    registered,
  };

}

export default useAuth