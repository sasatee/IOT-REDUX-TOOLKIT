import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const signUpUser = createAsyncThunk("user/signupuser", async (body) => {
  const response = await fetch(`sfsfsfs`, {
    method: "post",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return await response.json();
});

export const signInUser = createAsyncThunk(
  "user/signinuser",
  async (userCredentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        "https://jwt-iot.vercel.app/api/v1/auth/login",
        userCredentials
      );
      // AsyncStorage.setItem("token", data.API_key);
      // console.log(data.token);
      return data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);
