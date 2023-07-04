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
  const users = useSelector(getNameList)
  // useEffect (()=>{
  //   dispatch(fetchTasks())
  // },[dispatch])

  const handleClick = () => {
    const data = dispatch(fetchTasks());   
    console.log("work!", data);
  }

  return(
      <>
        <button onClick={handleClick}>Get Fetch Data</button>
        <SectionBlock>
        <h1>Phonebook</h1>
        <ContactForm/>
        </SectionBlock>
        <SectionBlock>
        <h2>Contacts</h2>
        <FilterComponent/>
        <ContactList/>
        </SectionBlock>
        {/* <p>{users.length > 0 && JSON.stringify(users, null, 2)}</p> */}
      </>
  );
}