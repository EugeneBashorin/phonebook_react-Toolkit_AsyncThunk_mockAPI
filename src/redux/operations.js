import axios from "axios";
import {fetchingInProgress, fetchingSuccess, fetchingError} from "./userSlice"

axios.defaults.baseURL = "https://64a03db3ed3c41bdd7a720ce.mockapi.io";

export const fetchTasks = () => async dispatch => {
    try{
        dispatch(fetchingInProgress());
        const response = await axios.get("/contacts");
        dispatch(fetchingSuccess(response.data));
    } catch (e){
        dispatch(fetchingError(e.message));
    }
}