import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./phonebookForm/phonebookSlice"; 
import { filterReducer } from "./contactsList/contactsListSlice";

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer
    },
})