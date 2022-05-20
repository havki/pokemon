import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useSelector } from 'react-redux';

export default function ComboBox({show}) {
  const [value, setValue] = React.useState('')
  const [open,setOpen] = React.useState(false)
  const [textValue,setTextValue] = React.useState('')

  const {pokesData,pokes} = useSelector((state)=>state.poke)
  
  
  
  
  if(value ){
   show( {
    name: "charizard",
  url: "https://pokeapi.co/api/v2/pokemon/6/"
  },)
  setValue('')

  }

  if(!pokes){
    return null
  }
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      freeSolo
      // inputValue={value}
      options={pokes.results.map((option) => option.name)}
      open = {open}
      sx={{ width: '50%' }}
      onInputChange={(event, newInputValue) => {
        setTimeout(() => {
          
          setOpen(true)
        }, 2000);
        
      }}
      onChange={(event, newValue) => {
        setValue(newValue);
        setOpen(false)
        
        
      }}
      renderInput={(params) => <TextField onChange={(e)=>(setTextValue(e.target.value))} {...params} label="Movie" />}
    />
  );
}

