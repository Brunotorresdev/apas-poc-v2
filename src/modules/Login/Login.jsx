import { useEffect, useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useLogin } from "./hooks/useLogin";
import StorageHelper from "../../utils/StorageHelper";
import { Alert, Snackbar } from "@mui/material";
import { useAuthStore } from "../../hooks/useAuthStore";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setIsLoading] = useState(false);
  const { setUser, user } = useAuthStore((state) => state);

  const [snackBar, setSnackBar] = useState({
    open: false,
    message: "",
    variant: "success",
  });
  const login = useLogin();

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      const auth = await login.mutateAsync({ email, password });
      StorageHelper.setValue("accessToken", auth?.data.accessToken);
      setUser({ accessToken: auth?.data.accessToken });
      setSnackBar({
        open: true,
        message: "Login efetuado com sucesso",
        variant: "suceess",
      });
      navigate("/");
    } catch (e) {
      setSnackBar({
        open: true,
        message: "Erro ao tentar fazer login, tenta novamente",
        variant: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container-app">
      <Snackbar
        open={snackBar.open}
        autoHideDuration={6000}
        onClick={() => setSnackBar({ ...snackBar, open: false })}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          severity={snackBar.variant}
          onClose={() => setSnackBar({ ...snackBar, open: false })}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snackBar.message}
        </Alert>
      </Snackbar>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h1>Acesse o sistema</h1>
          <div className="input-field">
            <input
              type="text"
              placeholder="E-mail"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FaUser className="icon" />
          </div>
          <div className="input-field">
            <input
              type="password"
              placeholder="Senha"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FaLock className="icon" />
          </div>

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
