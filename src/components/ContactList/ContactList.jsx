import PropTypes from 'prop-types';
import {ReactComponent as FvrSvgRed} from '../heart-red.svg'
import {ReactComponent as FvrSvgWht} from '../heart-white.svg'
import React from "react";
import {ListElement, ListItem, Button, BtnWrapper} from "./ContactList.styled.jsx"
import {useDispatch, useSelector} from "react-redux";
import {deleteUser, editFavorite} from "../../redux/operations.js";
import { selectFilteredUsersList } from "../../redux/selectors"

export const ContactList = () => {
const dispatch = useDispatch();
const filteredUsers = useSelector(selectFilteredUsersList);

    return (
        <ListElement>
            {filteredUsers.map( contact => (
                <ListItem key={contact.id}>
                    {contact.name}: {contact.phoneNumber} 
                    <BtnWrapper>
                        {contact.favorites===true?<FvrSvgRed/>:<FvrSvgWht/>}
                        <input type="checkbox" checked={contact.favorites} onChange={() => dispatch(editFavorite(contact))}/>
                        <Button type="button" onClick={()=> dispatch(deleteUser(contact.id))}>Delete</Button>
                    </BtnWrapper>
                </ListItem>
            ))}
        </ListElement>
    )
}
ContactList.propTypes = {
    key: PropTypes.string,
    name: PropTypes.string,
    phoneNumber: PropTypes.number,
}