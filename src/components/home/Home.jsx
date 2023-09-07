import { useEffect } from 'react';

//components
 import Navbar from './Navbar';
 import Banners from './Banners';
 import{ Box , styled } from '@mui/material';
 import { getProducts } from '../../redux/action/productActions';
 import { useDispatch , useSelector } from 'react-redux';


 const Component = styled(Box)  `
     padding : 10px;
     background : #F2F2F2;
     
 `
const Home = () => {

   const { products } = useSelector(state => state.getProducts)

   const dispatch = useDispatch();

   useEffect(()=>{
   dispatch( getProducts())
   
   } ,[dispatch])

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