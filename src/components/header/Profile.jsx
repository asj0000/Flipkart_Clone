import {useState} from 'react';
import { Typography ,Box , styled } from "@mui/material"
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const Component = styled(Menu)  `

    margin-top: 5px ;
`;

const Logout = styled(Typography) `
   font-size : 14px;
   margin-left: 20px;
`;

const Profile = ({account , setAccount}) =>{

  const [open , setOpen] = useState(false);

  const handleClick = (event) =>{
    setOpen(event.currentTarget);
  }

  const handleClose = ()=>{
    setOpen(false);
  }

  const logoutuser = ()=>{
     setAccount ('');
  }

  return(
    <>
    <Box onClick={handleClick}><Typography style={{marginTop: 2,cursor:'pointer' }}>{account}</Typography></Box>
    <Component
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() =>{handleClose() ; logoutuser(); }}>
        
          <PowerSettingsNewIcon color="primary" fontSize="small" />
          <Logout>Logout</Logout>
   
         
        </MenuItem>
      </Component>
    
    </>

  )
}

export default Profile;