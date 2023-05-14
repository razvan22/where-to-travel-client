import { Button, TextField } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { UserCreateRequest } from "../../shared/types/user/UserCreateRequest";
import "./Signup.css";
import axios, { AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,23}$/;
const NAME_REGEX = /^[a-zA-Z]{2,23}/;
const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,25}$/;
type NameType = "firstName" | "lastName";

const Signup: React.FC = () => {
  const navigate = useNavigate();
  const emailRef = useRef<string>();
  const errRef = useRef();

  const [email, setEmail] = useState<string>();
  const [validEmail, setValidEmail] = useState(true);

  const [firstName, setFirsName] = useState<string>();
  const [validFirstName, setValidFirstName] = useState(true);

  const [lastName, setLastName] = useState<string>();
  const [validLastName, setValidLastName] = useState(true);

  const [password, setPassword] = useState<string>();
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>();
  const [validPassword, setValidPassword] = useState(true);
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const [errMsg, serErrMsg] = useState<string>();
  const [success, serSuccess] = useState(false);

  const user: UserCreateRequest = {
    email: email,
    firstName: firstName,
    lastName: lastName,
    password: password,
  };

  useEffect(() => {
    if (email) {
      const emailValid = EMAIL_REGEX.test(email);
      setValidEmail(emailValid);
    }

    if (firstName) {
      const firstNameValid = NAME_REGEX.test(firstName);
      setValidFirstName(firstNameValid);
    }
    if (lastName) {
      const lastNameValid = NAME_REGEX.test(lastName);
      setValidLastName(lastNameValid);
    }
  }, [user]);

  useEffect(() => {
    if (password) {
      const isPasswordValid = PASSWORD_REGEX.test(password);
      console.log(isPasswordValid);

      setValidPassword(isPasswordValid);

      if (isPasswordValid && passwordConfirmation?.length) {
        const passwordsMatch = password === passwordConfirmation;
        setPasswordsMatch(passwordsMatch);
      }
    }
  }, [password, passwordConfirmation]);

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
        helperText={validFirstName ? "" : "Invalid !"}
        error={!validFirstName}
        variant="outlined"
      />
      <TextField
        onChange={(e) => setLastName(e.target.value)}
        required
        className="input"
        label="Last name"
        error={!validLastName}
        helperText={validLastName ? "" : "Invalid !"}
        variant="outlined"
      />
      <TextField
        onChange={(e) => setEmail(e.target.value)}
        required
        error={!validEmail}
        className="input"
        label="Email"
        type="text"
        helperText={validEmail ? "" : "Invalid email"}
        variant="outlined"
      />
      <TextField
        onChange={(e) => setPassword(e.target.value)}
        required
        className="input"
        error={!validPassword}
        helperText={validPassword ? "" : "Invalid password"}
        label="Password"
        type="password"
        variant="outlined"
      />
      <TextField
        onChange={(e) => setPasswordConfirmation(e.target.value)}
        required
        className="input"
        label="Confirm password"
        error={!passwordsMatch}
        helperText={passwordsMatch ? "" : "Passwords don't match"}
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
