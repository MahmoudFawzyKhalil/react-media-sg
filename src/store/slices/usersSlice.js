import { createSlice } from "@reduxjs/toolkit";
import { addUser, fetchUsers, removeUser } from "../thunks/userThunks";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    // Useless, but for illustration purposes
    // We handle loading and error locally in the component using the useThunk hook
    // isLoading: false,
    // error: null,
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.pending, (state) => {
        // state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        // state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        // payload is the return from the async thunk
        // state.isLoading = false;
        state.error = action.error;
      })

      .addCase(addUser.pending, (state) => {
        // state.isLoading = true;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        // state.isLoading = false;
        state.data.push(action.payload);
      })
      .addCase(addUser.rejected, (state, action) => {
        // state.isLoading = false;
        // state.error = action.error;
      })

      .addCase(removeUser.pending, (state) => {
        // state.isLoading = true;
      })
      .addCase(removeUser.fulfilled, (state, action) => {
        // state.isLoading = false;
        state.data = state.data.filter((user) => user.id !== action.payload.id);
      })
      .addCase(removeUser.rejected, (state, action) => {
        // state.isLoading = false;
        // state.error = action.error;
      });
  },
});

export const usersReducer = usersSlice.reducer;
