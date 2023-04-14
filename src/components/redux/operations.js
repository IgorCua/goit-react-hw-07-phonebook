import axios from "axios";
import { 
    fetchingError, 
    fetchingSuccess, 
    fetchingInProgress 
} from "./phonebookForm/phonebookSlice";
axios.defaults.baseURL = "https://64393e304660f26eb1ae0394.mockapi.io";

export const fetchContacts = () => async dispatch => {
    try{
        dispatch(fetchingInProgress());

        const response = await axios.get('/contacts');
        console.log(response);

        dispatch(fetchingSuccess(response.data));
    } catch (error){
        console.log(error);
    }
}
fetchContacts()