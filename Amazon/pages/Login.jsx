import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Login() {
  const { login } = useContext(UserContext);

  return (
    <button onClick={() => login("Aman")}>
      Login
    </button>
  );
}

export default Login;
