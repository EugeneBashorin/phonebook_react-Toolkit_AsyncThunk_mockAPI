import { ContactForm  } from "./ContactForm/ContactForm.jsx";
import { ContactList } from "./ContactList/ContactList";
import { FilterComponent } from "./FilterComponent/FilterComponent";
import { SectionBlock } from "./App.styled.jsx"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUsers } from "redux/operations.js";
import { selectIsLoading, selectError } from "redux/selectors.js";

export function App(){
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

   useEffect ( () => {
        dispatch(fetchUsers()) 
        },[dispatch]
    )

   return(
      <>
        <SectionBlock>
        <h1>Phonebook</h1>
        <ContactForm/>
        </SectionBlock>
        <SectionBlock>
        <h2>Contacts</h2>
        <FilterComponent/>
        <ContactList/>
        {isLoading && !error && <p><b>Loading Users List...</b></p>}
        </SectionBlock>
      </>
  );
}