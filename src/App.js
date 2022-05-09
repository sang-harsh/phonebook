import './App.css';
import * as React from 'react';
//Components
import Favorites from './components/Favorites';
import AllContacts  from './components/AllContacts';
import Recent from './components/Recent';

//REDUX
import {Provider} from 'react-redux';
import { createStore } from 'redux';


//MUI
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import allReducers from './reducers';
import NewContactModal from './components/NewContactModal';


const store = createStore(allReducers);

export default function App() {
  const [value, setValue] = React.useState(0);
  
  return (
    <Provider store={store}>
      <Box sx={{ width: 400,margin: 'auto' }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="All Contacts" icon={<PersonIcon  />}/>
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />}/>
        
      </BottomNavigation>
      <div>
        {(value===0) && <Recent/>}
        {(value===1) && <AllContacts/> }
        {(value===2) && <Favorites/>}
      </div>
      </Box>
      <NewContactModal/>
    </Provider>
  );
}