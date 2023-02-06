import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { faker } from "@faker-js/faker";

const url = `http://localhost:3005/users/`;
const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const response = await axios.get(url);
  await pause(1000);
  return response.data;
});

const addUser = createAsyncThunk("users/add", async () => {
  const response = await axios.post(url, {
    name: faker.name.fullName(),
  });
  await pause(1000);
  return response.data;
});

const removeUser = createAsyncThunk("users/remove", async (user) => {
  await axios.delete(`${url}${user.id}`);
  await pause(1000);
  return user;
});

const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

export { addUser, removeUser, fetchUsers };
