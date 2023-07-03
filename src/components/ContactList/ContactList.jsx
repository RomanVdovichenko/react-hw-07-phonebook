import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactItem } from '../ContactItem/ContactItem';
import { getContacts, getError, getFilter, getIsLoading } from 'redux/contactSelectors';
import { fetchContacts } from 'redux/contactOperations';
import { Loader } from 'components/Loader/Loader';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contact = useSelector(getContacts);
  const filterContact = useSelector(getFilter);
  const loading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => { dispatch(fetchContacts()) }, [dispatch]);
  
  const getVisibleContact = () => {
    const normalizedContact = filterContact.toLowerCase();
    return contact.filter(({ name }) =>
      name.toLowerCase().includes(normalizedContact)
    );
  };

  const visibleContact = getVisibleContact();

  return (
  <>
      {loading && <Loader />}
      {visibleContact?.length === 0 && !error && <p><b>No contacts</b></p>}
      {error ? <p>Sorry, there was an error.</p> :
        <ul> 
      {visibleContact?.map(item => 
        <ContactItem key={item.id} contact={item} />
        )}
    </ul>
      }
  </>
  );
};
