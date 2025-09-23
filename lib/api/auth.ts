"use client";
import axios from "axios";
export async function registerUser(
  username: string,
  email: string,
  password: string
) {
  console.log("Registering in registerUser fn user with:", { username, email, password });
  const res = await axios.post(
    "/api/auth/register",
    { username, email, password },
    {
      headers: { "Content-Type": "application/json" },
    }
  );
  if (!res.data.success) {
    const error = await res.data.error;
    throw new Error(error.message || "Registration failed");
  }
  return res.data;
}

export async function loginUser(email: string, password: string) {
  const res = await axios.post(
    "/api/auth/login",
    { email, password },
    {
      headers: { "Content-Type": "application/json" },
    }
  );
  console.log("loginUser response data:", res.data);
  console.log("loginUser status:", res.data.success);
  if (!res.data.success) {
    const error = await res.data.error;
    throw new Error(error.message || "Login failed");
  }
  return res.data;
}
