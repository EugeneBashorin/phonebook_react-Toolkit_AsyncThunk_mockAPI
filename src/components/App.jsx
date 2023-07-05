import { ContactForm  } from "./ContactForm/ContactForm.jsx";
import { ContactList } from "./ContactList/ContactList";
import { FilterComponent } from "./FilterComponent/FilterComponent";
import { SectionBlock } from "./App.styled.jsx"
import { useDispatch, useSelector } from "react-redux";
import {getNameList} from "redux/selectors";
import { useEffect } from "react";
import { fetchTasks } from "redux/operations.js";

export function App(){
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.isLoading);
  const error = useSelector(state => state.error);

   useEffect ( ()=>{ dispatch(fetchTasks()) },[dispatch])

   return(
      <>
        <SectionBlock>
        <h1>Phonebook</h1>
        <ContactForm/>
        </SectionBlock>
        <SectionBlock>
        <h2>Contacts</h2>
        <FilterComponent/>
        {isLoading && <p>Loading tasks...</p>}
        {error && <p>{error}</p>}
        <ContactList/>
        </SectionBlock>
      </>
  );
}