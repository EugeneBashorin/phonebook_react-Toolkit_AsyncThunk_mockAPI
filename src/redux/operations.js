import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://64a03db3ed3c41bdd7a720ce.mockapi.io";

export const fetchUsers = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("/contacts");
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
) 

export const addUser = createAsyncThunk(
    "contacts/addUser",
    async(userData,thunkAPI)=>{
        try {
            const {id, name, phoneNumber, favorites} = userData;
            const response = await axios.post("/contacts", {id, name, phoneNumber, favorites});
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    })
       
export const deleteUser = createAsyncThunk(
    "contacts/deleteUser",
    async(userId, thunkAPI)=>{
        try {
            const response = await axios.delete(`/contacts/${userId}`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const editFavorite = createAsyncThunk(
    "contacts/editFavorite",
    async(userData, thunkAPI)=>{
        try {
            const response = await axios.put(`/contacts/${userData.id}`,{
                favorites: !userData.favorites,
            })
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)