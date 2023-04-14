import PropTypes from "prop-types";
// import { nanoid } from 'nanoid';
import React from "react";
import style from "./Phonebook.module.css";
import { PhonebookForm } from "./PhonebookForm/PhonebookForm";
import { ContactsList } from "./ContactsList/ContactsList";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "components/redux/operations";
// import { useSelector } from "react-redux";
// import { fetchingError, fetchingInProgress, fetchingSuccess } from "components/redux/phonebookForm/phonebookSlice";

export const Phonebook = () => {
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(fetchContacts())
    }, [dispatch])
    
    return <section>
        <h1 className={style.title}>Phonebook</h1>
        <PhonebookForm/>   
        <ContactsList 
            // searchByName={searchByName}
           
        >
        </ContactsList >
    </section>
}

Phonebook.propTypes = {
    contacts: PropTypes.array,
    filter: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string
}