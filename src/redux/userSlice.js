import {createSlice} from "@reduxjs/toolkit";
import { addUser, deleteUser, editFavorite} from "./operations";

const userInitialState = {
    usersList: [],
    isLoading: false,
    error: null,
};

const userSlice = createSlice(
    {
        name:"user",
        initialState: userInitialState,
        extraReducers:{
// Add user            
            [addUser.pending](state){
                state.isLoading = true;
              },
            [addUser.fulfilled](state, action){
                state.isLoading = false;
                state.error = null;
                if(state.usersList.find(contact => contact.name.toLowerCase() === action.payload.name.toLowerCase())){  
                    alert(`${action.payload.name} is already in contacts.`)
                            return;
                    }
                state.usersList.push(action.payload);
              },
            [addUser.rejected](state, action){
                state.isLoading = false;
                state.error = action.payload;
              }, 
// Delete user                
            [deleteUser.pending](state){
                state.isLoading = true;
              },
            [deleteUser.fulfilled](state, action){
                state.isLoading = false;
                state.error = null;
                const index = state.usersList.findIndex(user=> user.id === action.payload.id)
                state.usersList.splice(index, 1)
              },
            [deleteUser.rejected](state, action){
                state.isLoading = false;
                state.error = action.payload;
              },
// Edit FAVORITE status
            [editFavorite.pending](state){
                state.isLoading = true;
              },
            [editFavorite.fulfilled](state, action){
                state.isLoading = false;
                state.error = null;
                const index = state.usersList.findIndex(user => user.id === action.payload.id);
                state.usersList.splice(index, 1, action.payload)           
              },
            [editFavorite.rejected](state, action){
                state.isLoading = false;
                state.error = action.payload;
              },
        },
    }
)
export const userReducer = userSlice.reducer;