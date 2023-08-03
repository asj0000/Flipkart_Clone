import {InputBase,styled,Box} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


const Searchc = styled(Box)`
    background : #fff;
    width : 38%;
    border-radius : 2px;
    margin-left : 10px;
    display : flex;
`;


const InputBaseBar = styled(InputBase) `
   padding-left : 20px;
   width : 100%;
   font-size : unset;
`;

const SearchIconWrapper = styled(Box)  `
    color : blue;
    padding : 5px;

`;

const Search = () => {
  return (
    <Searchc>
       <InputBaseBar
       placeholder='Search for products , brands and more'
       />
       <SearchIconWrapper >
        <SearchIcon/>
       </SearchIconWrapper>
    </Searchc>
 
    );
}
 
export default Search;