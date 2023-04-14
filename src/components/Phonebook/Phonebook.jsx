import PropTypes from "prop-types";
// import { nanoid } from 'nanoid';
import React from "react";
import style from "./Phonebook.module.css";
import { PhonebookForm } from "./PhonebookForm/PhonebookForm";
import { ContactsList } from "./ContactsList/ContactsList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "components/redux/operations";
import { selectIsLoading ,selectError } from "components/redux/contactsList/selectors";
// import { useSelector } from "react-redux";
// import { fetchingError, fetchingInProgress, fetchingSuccess } from "components/redux/phonebookForm/phonebookSlice";

export const Phonebook = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    useEffect(()=> {
        dispatch(fetchContacts())
    }, [dispatch]);
    
    return <section className={style.section}>
        <h1 className={style.title}>Phonebook</h1>
        <PhonebookForm/>   
        {isLoading && !error && <b>Request in progress...</b>}
        <ContactsList>
        </ContactsList >
    </section>
}

Phonebook.propTypes = {
    contacts: PropTypes.array,
    filter: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string
}