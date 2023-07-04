import {createSlice} from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const userInitialState = {
    usersList: [
    {id: "QYlW1HCd4ijnSzwFCsl4v", name: "lkj", phoneNumber: "546854", favorites: false},
    {id: "9yOvUkyS2yOJLd04137WG", name: "Goran Puller", phoneNumber: "87954665", favorites: false},
    {id: "T-GBRIXc_ysRhJk2M69P5", name: "Gobi Desert", phoneNumber: "3216546", favorites: true},
    {id: "441JnrwC836flcGskZMp5", name: "Eugene", phoneNumber: "5466546213654", favorites: false},
    ],
    isLoading: false,
    error: null,
};

const userSlice = createSlice(
    {
        name:"user",
        initialState: userInitialState,
        reducers:{
            addUser:{
                reducer(state, action){
                    if(state.find(contact => contact.name.toLowerCase() === action.payload.name.toLowerCase())){  
                        alert(`${action.payload.name} is already in contacts.`)
                        return;
                    }
                         state.push(action.payload)
                },
                prepare({name, phoneNumber,favorites}){
                    return{
                        payload:{
                            id: nanoid(),
                            name,
                            phoneNumber,
                            favorites,
                        }
                    }
                },
        },
        fetchingInProgress(state){
            state.isLoading = true;
        },
        fetchingSuccess(state, action){
            state.isLoading = false;
            state.error = null;
            state.usersList = action.payload;
        },
        fetchingError(state, action){
            state.isLoading = false;
            state.error = action.payload;
        },
            deleteUser(state, action){
                const index = state.findIndex(state => state.id === action.payload);
                state.splice(index, 1);
            },
            editFavorite(state, action){
                for(let user of state){
                    if(user.id === action.payload){
                        user.favorites = !user.favorites;
                        break;
                    }
                }
            }
        }
    }
)

export const {addUser, deleteUser, editFavorite, fetchingInProgress, fetchingSuccess, fetchingError} = userSlice.actions;
export const userReducer = userSlice.reducer;