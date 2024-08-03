import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "users",
  initialState: {
    allUsers: [],
    filteredUsers: [],
    sortUsers: [],
  },
  reducers: {
    addInitUser: (state, action) => {
      state.allUsers = action.payload;
      state.filteredUsers = action.payload;
    },
    filterUser: (state, action) => {
      const { selectGender, selectCountry } = action.payload;
      state.filteredUsers = state.allUsers.filter((user) => {
        return (
          (selectGender === "all" || user.gender === selectGender) &&
          (selectCountry === "all" || user.address.country === selectCountry)
        );
      });
    },
    sortUserByName: (state, action) => {
      state.sortUsers = [...state.filteredUsers];
      if (action.payload === "ASC") {
        state.filteredUsers = state.sortUsers.sort((a, b) => {
          return a.firstName.localeCompare(b.firstName);
        });
      } else {
        state.filteredUsers = state.sortUsers.sort((a, b) => {
          return b.firstName.localeCompare(a.firstName);
        });
      }
    },
    sortUserById: (state, action) => {
      state.sortUsers = [...state.filteredUsers];
      if (action.payload === "ASC") {
        state.filteredUsers = state.sortUsers.sort((a, b) => a.id - b.id);
      } else {
        state.filteredUsers = state.sortUsers.sort((a, b) => b.id - a.id);
      }
    },
    sortUserByAge: (state, action) => {
      state.sortUsers = [...state.filteredUsers];
      if (action.payload === "ASC") {
        state.filteredUsers = state.sortUsers.sort((a, b) => a.age - b.age);
      } else {
        state.filteredUsers = state.sortUsers.sort((a, b) => b.age - a.age);
      }
    },
  },
});

export const userAction = UserSlice.actions;

export default UserSlice;
