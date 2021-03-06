import React from 'react';
import { useSelector } from 'react-redux';
import ContactCard from './ContactCard';

function Favorites() {
  const contacts  = useSelector(state => state.allContacts);

  const favoriteContacts = contacts.filter((element)=> element.isFav);


  return (
    <div>
      {
        favoriteContacts.map((element,i)=>{
          return <ContactCard name={element.name} mobile={element.mobile} isFav={element.isFav} 
          key={i} id={element.id}/>
        })
      }
    </div>
  )
}

export default Favorites;