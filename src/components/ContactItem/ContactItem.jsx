import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './ContactItem.module.css';
import { deleteContact } from 'redux/contactOperations';
import { getIsLoading } from 'redux/contactSelectors';

export const ContactItem = ({ contact }) => {
  const loading = useSelector(getIsLoading);

  const dispatch = useDispatch();

  const handleDelete = () => { 
    dispatch(deleteContact(contact.id));
  };
  
  return (
    <li>
      <span className={css.user}>{contact.name}:</span>
      <span className={css.contact}>{ contact.phone}</span>
      <button
        className={css.btn}
        type="button"
        disabled={loading}
        onClick={handleDelete}
      >
        Delete
      </button>
    </li>
  );
}
