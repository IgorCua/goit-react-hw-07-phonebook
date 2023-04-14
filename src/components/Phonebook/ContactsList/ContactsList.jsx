import style from "./ContactsList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { 
    selectfilteredContacts 
} from "components/redux/contactsList/selectors";
import { filterAction } from "components/redux/contactsList/contactsListSlice";
import { deleteContact } from "components/redux/operations";

export const ContactsList = (props) => {
    
    const filteredContacts = useSelector(selectfilteredContacts)
    const dispatch = useDispatch();

    function filterContacts (evt) {
        dispatch(filterAction(evt.target.value.toLowerCase()));
    }

    const deleteFromContacts = (evt) => {
        const elemId = evt.target.parentElement.id;
        
        dispatch(deleteContact(elemId));
    }

    return (
        <div className={style.contactsDiv}>
            <h2 className={style.title}>Contacts</h2>
            <label className={style.filterLabel} htmlFor="filter">Find contacts by name</label>
            <input className={style.filterInput} type="text" id="filter" onChange={filterContacts}/>
            
            <ul className={style.list}>
                {filteredContacts?.map(({id, name, phone}) => {
                    return <li className={style.item} key={id} id={id}>
                        <p className={style.text}>{name}: {phone}</p> 
                        <button className={style.button} type="button" onClick={deleteFromContacts}>Delete</button>       
                    </li>
                })}
            </ul>
        </div>
    )
}