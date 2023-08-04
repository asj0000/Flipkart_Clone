import {Box,Typography,styled} from '@mui/material';
import { navData } from '../../constants/data';

const Components = styled(Box)  `
   display : flex;
   margin : 55px 130px 0 130px;
   justify-content : space-between;
`
const Container = styled(Box) `
    padding :  12px 8px;
    text-align : center;

`
const Text = styled(Typography) `
      font-size:14px
      font-weight : 600;
      font-family : inherit;
`


const Navbar = () => {
  return ( 
    
    <Components>
      {
        //Looping through objects of data.js file by map function
        navData.map(data => (
        
         <Container> 
            <img src={data.url} alt = "nav" style={{width : 64}}/>
            <Text>{data.text}</Text>
          </Container>
        
        ))
      }
    </Components>


   );
}
 
export default Navbar;