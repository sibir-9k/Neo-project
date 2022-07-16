import {createSlice} from "@reduxjs/toolkit"

const initialState = {
  email: null,
  token: null,
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


// import axios from "axios"

// export const userSlice = createSlice({
//   name: "user",
//   initialState:  {
//     API: axios.create({
//       baseURL: "http://localhost:3001/",
//     }),
//     fullname: null,
//     token: (accessToken) => localStorage.setItem(accessToken),
//     isValid: false,
//   },

//   reducers: {
//     createUser(state, action) {
//       const {fullname, email, password} = action.payload;
//       if (!fullname.isValid || !email.isValid || !password.isValid) {
//         console.log ("error")
//       } else {
//         state.isValid = true;
//         state.API.post("auth/registration", {
//           fullname: fullname.value,
//           email: email.vale,
//           password: password.value,
//         });
//       }
//     }
//   }
// })

// export const {createUser} = userSlice.actions;

// export default userSlice.reducer;