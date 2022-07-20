import {createSlice} from "@reduxjs/toolkit"

const initialState = {
  user : 
    {
      email: null,
      token: localStorage.getItem("token"),
      fullName: localStorage.getItem("fullName"),
      role: JSON.parse(localStorage.getItem("role"))
    }
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
      setUsers(state, action) {
        console.log(action.payload)
        state.user.email = action.payload.email;
        state.user.token = action.payload.token;
        state.user.fullName = action.payload.fullName;
        state.user.role = action.payload.role;

        localStorage.setItem("token", state.user.token);
        localStorage.setItem("role", JSON.stringify(state.user.role))
        localStorage.setItem("fullName", state.user.fullName)
      },
      removeUser(state){
        state.email = null;
        state.token = null;
        state.id = null;
        state.role = {};

        localStorage.removeItem("token");
        localStorage.removeItem("role")
        localStorage.removeItem("fullName")
      },
  }
})

export const {setUsers, removeUser} = userSlice.actions;

export default userSlice.reducer;


