import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://64393e304660f26eb1ae0394.mockapi.io";


export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll', 
    
    async (_, thunkAPI) =>{
    try{
        const response = await axios.get('/contacts');
        return response.data;

    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const addContact = createAsyncThunk(
    'contacts/addContact',

    async (text, thunkAPI) => {
        const { name, phone} = text;
        try{
            const response = await axios.post('/contacts', { name, phone});
            return response.data;
        } catch (error){
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',

    async (id, thunkAPI) => {
        try{
            const response = await axios.delete(`/contacts/${id}`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

// export const toggleCompleted = createAsyncThunk(
//     'contacts/toggleCompleted',
//     async (contact, thunkAPI) => {
//         const response = axios.put()
//     }
// )