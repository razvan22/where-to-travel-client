import { Alert, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { UserCredentials } from "../../models/user/UserCredentials";
import loginRequest from "../../hooks/loginRequest";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [err, setError] = useState<boolean>(false);

  useEffect(() => {
    setError(false);
  }, [email, password]);

  const credentials: UserCredentials = {
    email: email,
    password: password,
  };

  const loginUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await loginRequest(credentials);
      if (response.status === 200) {
        navigate("/");
      }
    } catch (err) {
      setError(true);
    }
  };

  return (
    <form className="form" onSubmit={loginUser}>
      <TextField
        onChange={(e) => setEmail(e.target.value)}
        type="input"
        required
        className="input"
        label="Email"
        variant="outlined"
      />
      <TextField
        onChange={(e) => setPassword(e.target.value)}
        required
        className="input"
        label="Password"
        type="password"
        variant="outlined"
      />
      {err ? (
        <Alert sx={{ marginTop: 2 }} severity="info">
          Some thing went wrong ! Check your username and password
        </Alert>
      ) : (
        ""
      )}
      <Button type="submit" variant="contained">
        Sign In
      </Button>
    </form>
  );
};

export default Signin;
