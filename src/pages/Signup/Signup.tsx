import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { CreateUserDTO } from "../../models/user/CreateUserDTO";
import "./Signup.css";
import axios, { AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";

const Signup: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>();
  const [firstName, setFirsName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [password, setPassword] = useState<string>();

  const user: CreateUserDTO = {
    email: email,
    firstName: firstName,
    lasName: lastName,
    password: password,
  };

  const signUp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response: AxiosResponse = await axios.post<AxiosResponse>(
      "http://localhost:8080/api/v1/user",
      user,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status === 200) {
      navigate("/signin");
    }
  };

  return (
    <form className="form" onSubmit={signUp}>
      <TextField
        onChange={(e) => setFirsName(e.target.value)}
        required
        className="input"
        label="First name"
        variant="outlined"
      />
      <TextField
        onChange={(e) => setLastName(e.target.value)}
        required
        className="input"
        label="Last name"
        variant="outlined"
      />
      <TextField
        onChange={(e) => setEmail(e.target.value)}
        required
        className="input"
        label="Email"
        type="text"
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
      <Button type="submit" variant="contained">
        Sign Up
      </Button>
    </form>
  );
};

export default Signup;
