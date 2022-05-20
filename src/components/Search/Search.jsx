import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useSelector } from "react-redux";
const options = ['Option 1', 'Option 2'];

export default function ComboBox({ show }) {
  const [value, setValue] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const { pokesData, pokes } = useSelector((state) => state.poke);
  const [inputValue, setInputValue] = React.useState("");
  



  if (value ) {
    show({
      name: "charizard",
      url: "https://pokeapi.co/api/v2/pokemon/6/",
    });
    setValue("");
  }

  if (!pokes) {
    return null;

  }

  function debounce(func, timeout = 2000){
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
  }
    
  function saveInput(){
    console.log(inputValue);;
  }
  
  const processChanges = debounce(() => saveInput());
  return (
    <Autocomplete
      freeSolo={true}
      value={null}
      loading= {true}
      //  filterOptions={(x) => x}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      // open={open}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        
        processChanges(setInputValue(newInputValue))
        // // setOpen(!open)
      }}
      id="controllable-states-demo"
      options={pokes.results.map((option) => option.name)}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Controllable" />}
    />
  );
}

// {/* <Autocomplete
//   disablePortal
//   id="combo-box-demo"
//   freeSolo
//   // inputValue={value}
//   options={pokes.results.map((option) => option.name)}
//   open = {open}
//   sx={{ width: '50%' }}
//   onInputChange={(event, newInputValue) => {
//     setTimeout(() => {

//       setOpen(true)
//     }, 2000);

//   }}
//   onChange={(event, newValue) => {
//     setValue(newValue);
//     setOpen(false)

//   }}
//   renderInput={(params) => <TextField onChange={(e)=>(setTextValue(e.target.value))} {...params} label="Movie" />}
// /> */}
