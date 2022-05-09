import { useSelector } from 'react-redux';
import React from 'react';
import ContactCard from './ContactCard';

function AllContacts() {
  const contacts = useSelector(state => state.allContacts);
  return (
    <div>
      {
        contacts.map((element,i)=>{
          return (<ContactCard name={element.name}  mobile={element.mobile} isFav={element.isFav} 
            key={i} id={element.id}/>)
        }
        )
      }
    </div>
  )
}

export default AllContacts;