// import { createSlice, nanoid } from "@reduxjs/toolkit";
// // import localStorage from "redux-persist/es/storage";

// const contactsInitialState = [
//     {id: '1', name: 'Name One', number: '+123456'},
//     {id: '2', name: 'Name Two', number: '+987656'},
//     {id: '3', name: 'Name Three', number: '+765422'}
// ]

// const contactsSlice = createSlice({
//     name: 'contacts',
//     initialState: contactsInitialState,
//     reducers: {
//         addContact: {
//             reducer(state, action) {
//                 state.push(action.payload);
//                // localStorage.setItem("persist:root", state)
//                 // console.log('reducer',localStorage)
//             },
//             prepare(nameVal, numVal){
//                 return {
//                     payload: {
//                         id: nanoid(5),
//                         name: nameVal,
//                         number: numVal
//                     }
//                 }
//             }
//         },
//         deleteContact(state, action){
//             const index = state.findIndex(contact => contact.id === action.payload)
//             state.splice(index, 1);
//         }
//     }
// });

// export const {addContact, deleteContact} = contactsSlice.actions;
// export const contactsReducer = contactsSlice.reducer;

const contactsSlice = {
    name: "contacts",
    initialState: {
        contacts: [],
        isLoading: false,
        error: null,
    },
    reducers: {
        fetchingInProgress(state, action) {
            state.isLoading = true;
        },
        fetchingSuccess(state, action) {
            state.isLoading = false;
            state.error = null;
            state.contacts = action.payload;
        },
        fetchingError(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
}
// export const  fetchingInProgress = contactsSlice.reducers.fetchingInProgress;
export const {fetchingInProgress, fetchingSuccess, fetchingError } = 
    contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;