import {createSlice} from "@reduxjs/toolkit"

const initialState = {
  user : [
    {
      email: null,
      token: null,
      fullname: null,
    }
  ]
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
      setUsers(state, action) {
        state.email = action.payload.email;
        state.token = action.payload.token;
        state.fullname = action.payload.fullname;
      },
      removeUser(state){
        state.email = null;
        state.token = null;
        state.id = null;
      },
  }
})

export const {setUsers, removeUser} = userSlice.actions;

export default userSlice.reducer;


