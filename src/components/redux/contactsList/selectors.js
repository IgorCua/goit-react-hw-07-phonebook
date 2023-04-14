// import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.filter;

export const selectfilteredContacts = (state) => {
    // console.log('state', state)
    const contacts = selectContacts(state);
    const filter = selectFilter(state);
    // console.log('contacts', contacts)
    
    if(contacts?.length === 0) return;
    return contacts?.filter((elem) => {
        return elem.name.toLowerCase().includes(filter)
    })
}

// export const selectfilteredContacts = createSelector([selectFilter], 
//     (filtered) => {
//         console.log('filtered', filtered)
//         const contacts = selectContacts();
//         const filter = selectFilter();
//         console.log('contacts', contacts)
        
//         if(contacts?.length === 0) return;
//         return filtered.contacts.items?.filter((elem) => {
//             return elem.name.toLowerCase().includes(filter)
//     })
// })