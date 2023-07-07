import {createSlice} from "@reduxjs/toolkit";
import { fetchUsers, addUser, deleteUser, editFavorite} from "./operations";

const userInitialState = {
    usersList: [],
    isLoading: false,
    error: null,
};

const handlePending = state => {
    state.isLoading = true;
}

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
}

const userSlice = createSlice(
    {
        name:"user",
        initialState: userInitialState,
        extraReducers:{
// fetchUsers
            [fetchUsers.pending]:handlePending,
            [fetchUsers.fulfilled](state, action){
                state.isLoading = false;
                state.error = null;
                state.usersList = action.payload;
            },
            [fetchUsers.rejected]:handleRejected, 
// Add user            
            [addUser.pending]:handlePending,
            [addUser.fulfilled](state, action){
                state.isLoading = false;
                state.error = null;
                if(state.usersList.find(contact => contact.name.toLowerCase() === action.payload.name.toLowerCase())){  
                    alert(`${action.payload.name} is already in contacts.`)
                            return;
                    }
                state.usersList.push(action.payload);
              },
            [addUser.rejected]:handleRejected, 
// Delete user                
            [deleteUser.pending]:handlePending,
            [deleteUser.fulfilled](state, action){
                state.isLoading = false;
                state.error = null;
                const index = state.usersList.findIndex(user=> user.id === action.payload.id)
                state.usersList.splice(index, 1)
              },
            [deleteUser.rejected]:handleRejected,
// Edit FAVORITE status
            [editFavorite.pending]:handlePending,
            [editFavorite.fulfilled](state, action){
                state.isLoading = false;
                state.error = null;
                const index = state.usersList.findIndex(user => user.id === action.payload.id);
                state.usersList.splice(index, 1, action.payload)           
              },
            [editFavorite.rejected]:handleRejected,
        },
    }
)
export const userReducer = userSlice.reducer;