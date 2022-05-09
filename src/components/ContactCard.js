import React from 'react';
import { useDispatch } from 'react-redux';
import { add_recent, toggle_fav } from '../actions';

//MUI
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import PhoneIcon from '@mui/icons-material/Phone';
import IconButton from '@mui/material/IconButton';

//Styles
const styles ={
    container: {
      display: 'flex',
      padding: '8px',
      alignItems: 'center',
  },
  infoContainer:{
    flex:1,
    paddingLeft: '8px',
    paddingRight: '8px',
  },
  mobile:{
    fontSize: '14px',
    color: 'grey'
  },
}

//Avatar Functions
function stringToColor(string) {
  let hash = 0;
  let i;

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }


  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}



function ContactCard(props) {
  const dispatch = useDispatch();
  
  return (
    <div style={styles.container}>
      <div>
      <Avatar {...stringAvatar(props.name)} />
      </div>
      <div style={styles.infoContainer}>
        {props.name}
        <br/>
        <span style={styles.mobile}>+91 {props.mobile}</span>
        <br/>
        {props.showTimeStamp &&
        <span style={styles.mobile}>{props.timeStamp}</span>}

      </div>
      <div>
          <Rating name="simple-controlled" max={1} value={(props.isFav?(1):(0))} onChange={(event, newValue) => {
            dispatch(toggle_fav(props.id));
            }}
          />
      </div>
      <div>
          <IconButton color="primary"
          onClick={()=>{
            //need to add call functionality
            const today = new Date();

            dispatch(add_recent({
              id: props.id,
              time: today.toLocaleString(),
            }));
          }}
          >
            <PhoneIcon/>
          </IconButton>
          
      </div>
    </div>
  )
}

export default ContactCard;