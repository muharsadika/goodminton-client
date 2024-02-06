import { useState } from "react";
import { API } from "../../../libs/api";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AUTH_LOGIN } from "../../../stores/authReducer";

export default function FormLoginHook() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  async function handleLogin() {
    try {
      const response = await API.post("/buyerlogin", form);

      if (response.status === 200) {
        // Jika responsenya berhasil (status 200 OK), Anda dapat melakukan tindakan yang sesuai
        dispatch(AUTH_LOGIN(response?.data));
        navigate("/");
      } else if (response.status === 401) {
        // Jika responsenya adalah "Unauthorized" (status 401), token mungkin hilang atau tidak valid
        // Lakukan sesuatu di sini, misalnya, tampilkan pesan kesalahan
        console.log("Unauthorized: Missing or invalid token");
      } else {
        // Tindakan lain yang sesuai untuk kode tanggapan HTTP lainnya
        console.log("HTTP Status Code:", response.status);
      }
    } catch (error) {
      // Menangani kesalahan jaringan atau kesalahan lainnya
      console.log("Error:", error);
    }
  }

  return { form, handleChange, handleLogin };
}
