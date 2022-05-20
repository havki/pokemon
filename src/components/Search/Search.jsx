import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useSelector } from 'react-redux';

export default function ComboBox() {
  const [value, setValue] = React.useState('')
  const [open,setOpen] = React.useState(false)
  const {pokesData,pokes} = useSelector((state)=>state.poke)
  
  
  
  if(value ){
    console.log(value);
  
  }

  if(!pokes){
    return null
  }
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      // inputValue={value}
      options={pokes.results.map((option) => option.name)}
      open = {open}
      sx={{ width: '50%' }}
      onInputChange={(event, newInputValue) => {
        
         setOpen(true)
        
      }}
      onChange={(event, newValue) => {
        setValue(newValue);
        setOpen(false)
        
        
      }}
      renderInput={(params) => <TextField {...params} label="Movie" />}
    />
  );
}

