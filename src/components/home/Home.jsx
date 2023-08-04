 //components
 import Navbar from './Navbar';
 import Banners from './Banners';
 import{ Box , styled } from '@mui/material';



 const Component = styled(Box)  `
     padding : 10px;
     background : #F2F2F2;
     
 `
const Home = () => {
  return (
    //created a parent component because JSX does not allow more than one parent component
    <> 
     <Navbar/>
     <Component>
        <Banners/>
     </Component>
    </>
    
   );
}
 
export default Home;