import { useState , useContext } from 'react';

import {Dialog, TextField , Box , Typography , Button , styled} from '@mui/material';

import {authenticateSignup , authenticateLogin} from '../../service/api';

import { DataContext } from '../../context/DataProvider';

const Component = styled(Box) `
   height: 70vh;
   width: 90vh;

`;

const Image = styled(Box) `
    background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
    height: 83%;
    width: 28%;
    padding: 45px 35px;
    & > p, & > h5{
      color : #FFFFFF;
      font-weight: 600
    }

`;

const Wrapper = styled(Box) `
   display: flex;
   flex-direction : column;
   padding: 25px  35px;
   flex: 1;
   & > div , & > button , & > p{
    margin-top: 20px;
   }
`;

const Loginbutton = styled(Button)  `
  text-transform: none;
  background: #F7A200;
  color: #fff;
  height: 48px;
  border-radius: 2px;

`;

const Requestotp = styled(Button)  `
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const Text = styled(Typography) `
    font-size: 12px;
    color: #878787;

`;

const CreateAcc = styled(Typography) `
    font-size: 14px;
    text-align: center;
    color: #2874f0;
    font-weight: 600;
    cursor: pointer;
    
`;

const Error=styled(Typography)  `
   font-size: 10px;
   color: red;
   line-height: 0;
   margin-top: 10px;
   font-weight: 600;

`;

const accountInitialval = {
  login:  {
    view: 'login',
    heading: 'Login',
    subheading: 'Get access to your Orders , wishlist and Recommendations'
  },
  signup: {
    view: 'signup',
    heading: "Looks like you're new here!",
    subheading: "Sign up with your mobile number to get started"
  }
}

const signUpInitialVal ={
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phone: ""
}

const LoginInitialVal = {
  username: '',
  password: ''
}

const LoginDialog=({open , setOpen})=>{

  const[account , toggleAcc] = useState(accountInitialval.login);
  const[signup , setSignup] = useState(signUpInitialVal);
  const[login , setLogin] = useState(LoginInitialVal);
  const [error ,  setError] = useState(false);

  const {setAccount} = useContext(DataContext);
  
  const togglesignup = () =>{
    toggleAcc(accountInitialval.signup);
  }

  const handleClose = ()=>{
    setOpen(false);
    toggleAcc(accountInitialval.login);
    setError(false);
  }
  const onInputChange= (e)=>{
     setSignup({...signup , [e.target.name]: e.target.value});
  }

  const signUpuser= async() =>{
     let response = await authenticateSignup(signup);
    
     if(!response) return;

     handleClose();
     setAccount(signup.firstname);
    }

    const onValueChange = (e)=>{
       setLogin({...login , [e.target.name] : [e.target.value]});
    }

    const loginUser = async()=>{
        let response = await authenticateLogin(login);

        if(response.status === 200){
          handleClose();
          setAccount(response.data.data.firstname);
        }
        else{
           setError(true);
        }
    }
    return (
    <Dialog open={open} onClose={handleClose} PaperProps={{ sx : {maxWidth: 'unset'} }}>
    <Component>
     <Box style={{ display:'flex' , height:'100%'}} >
      <Image>
        <Typography variant="h5">{account.heading}</Typography>
        <Typography style={{maginTop: 20}}> {account.subheading}</Typography>

      </Image>
     { 
       account.view === 'login'?
      <Wrapper>
      
        <TextField variant='standard' onChange={(e)=> onValueChange(e)} name="username" label="Enter Username"/>
       
        {error && <Error>Please Enter Valid Username or Password</Error> }
       
        <TextField variant='standard' onChange={(e)=> onValueChange(e)} name="password" label="Enter Password"/>
        <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy </Text>
        <Loginbutton onClick={()=>loginUser()}>Login</Loginbutton>
        <Typography style={{textAlign: 'center'}}>OR</Typography>
        <Requestotp>Request OTP</Requestotp>
        <CreateAcc onClick={()=> togglesignup()}>New to Flipkart? Create an account</CreateAcc>
      </Wrapper> 

      :
   <Wrapper>
      
      <TextField variant='standard' onChange={(e)=> onInputChange(e)} name="firstname" label="Enter Firstname"/>
      <TextField variant='standard' onChange={(e)=> onInputChange(e)} name="lastname" label="Enter Lastname"/>
      <TextField variant='standard' onChange={(e)=> onInputChange(e)} name="username" label="Enter Username"/>
      <TextField variant='standard' onChange={(e)=> onInputChange(e)} name="email" label="Enter Email"/>
      <TextField variant='standard' onChange={(e)=> onInputChange(e)} name="password" label="Enter Password"/>
      <TextField variant='standard' onChange={(e)=> onInputChange(e)} name="phone" label="Enter Phone"/>

      <Loginbutton onClick={() => signUpuser()}>Continue</Loginbutton>
    </Wrapper> 
     }
     </Box>
     </Component>
    </Dialog>
    )
}

export default LoginDialog;