import React from 'react';

//here we are using material ui(React  UI framework)
import {AppBar , Toolbar,Box,styled,Typography}  from '@mui/material';

//components
import Search  from './Search';
import CustomButtons from '../CustomButtons';


//AppBar is a material UI component which gives us a Navigation bar
const StyledHeader = styled(AppBar) `
     background : #047BD5;
     height : 55px;

  `;
  //Box is a material UI component which gives us a Div.
  const Component = styled(Box) `
     margin-left : 12%;
     line-height:0;
  `;

  
  const Subheading = styled(Typography) `
    font-size:10px;
    font-style:italic;
  `;
 
  //here we are styling html component in styled that is why we pass it as a string
  const PlusImage = styled('img')(
    {
      width : 10,
      height : 10,
      marginLeft:4
      
    }
  ) 

  const CustomButtonsWrapper = styled(Box)
    `  
        margin : 0 5% 0 auto;
    `;
  

const Header = () =>{

  const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
  const subURL =  'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
  return(

   <StyledHeader>                  {/*it will give us an Appbar */}
      <Toolbar style={{minHeight : 55}}>
     <Component> 
        <img src={logoURL} alt="logo"  style={{ width:75  }}/>
       <Box style={{display: 'flex'}}>
        <Subheading>Explore&nbsp;
          <Box component='span'style={{color : 'yellow',marginRight:'10'}}>Plus</Box>
          </Subheading>
          <PlusImage src={subURL} alt="sun-logo"/>
        </Box>
     </Component>
     <Search/>
     <CustomButtonsWrapper>
      <CustomButtons/>
     </CustomButtonsWrapper>
     </Toolbar>
   </StyledHeader>
  )
}

export default Header;