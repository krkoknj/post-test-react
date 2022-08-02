import React from "react";
import { useRef } from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Navigate } from "react-router-dom";
import "./style.css";
import { render } from "@testing-library/react";
import { useNavigate } from "react-router-dom";

function Validation() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const password = useRef();
  password.current = watch("password");

  const onSubmit = (data) => {
    axios
      .post("http://localhost:8080/api/hello", data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Email</label>
      <input
        name='email'
        type='email'
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      {errors.email && <p>This email field is required</p>}

      <label>Name</label>
      <input
        name='name'
        type='text'
        {...register("name", { required: true, maxLength: 10 })}
      />
      {errors.name && errors.name.type === "required" && (
        <p>This field is required</p>
      )}
      {errors.name && errors.name.type === "maxLength" && (
        <p>Your input exceed Max Length</p>
      )}

      <label>Password</label>
      <input
        name='password'
        type='password'
        {...register("password", { required: true, minLength: 8 })}
      />
      {errors.password && errors.password.type === "required" && (
        <p>This field is required</p>
      )}
      {errors.password && errors.password.type === "minLength" && (
        <p>Password must have at least 8 characters</p>
      )}

      <label>Password Confirm</label>
      <input
        name='password_confirm'
        type='password'
        {...register("password_confirm", {
          required: true,
          validate: (value) => value === password.current,
        })}
      />
      {errors.password_confirm &&
        errors.password_confirm.type === "required" && (
          <p>This field is required</p>
        )}
      {errors.password_confirm &&
        errors.password_confirm.type === "validate" && (
          <p>The passwords do not match</p>
        )}
      <input type='submit' value='SUBMIT' />
    </form>
  );
}

export default Validation;
