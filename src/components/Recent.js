import React from 'react';
import { useSelector } from 'react-redux';
import ContactCard from '../components/ContactCard';

function Recent() {
  const allContacts = useSelector(state => state.allContacts);
  const recentCalls = useSelector(state => state.recentCalls);
  console.log(recentCalls);
  let arr =[];

  for(let i=recentCalls.length-1;i>=0;i--){
          let currentContactId = recentCalls[i].id;
          allContacts.forEach(contact => {
            if(contact.id===currentContactId){
              currentContactId = contact;
            }
          });
          arr.push(
          <ContactCard name={currentContactId.name} 
            mobile={currentContactId.mobile} 
            isFav={currentContactId.isFav} 
            key={i} id={currentContactId.id}
            showTimeStamp={true}
            timeStamp={recentCalls[i].time}/>)  
  }


  return (
    <div>
      {
        arr.map(e=>e)
      }
    </div>
  )
}

export default Recent;