import React, { useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Autocomplete from "@mui/lab/Autocomplete";
import TextField from "@mui/material/TextField";
import debounce from "lodash/debounce";
import { useSelector } from "react-redux";
import { shouldForwardProp } from "@mui/system";
// import { getOptionsAsync } from './options';

let pokesArr = null;
const getOptionsAsync = (query) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        pokesArr.results.filter(
          (o) => o.name.toLowerCase().indexOf(query.toLowerCase()) > -1
        )
      );
    }, 1500);
  });
};

function DebouncedSearch({show}) {
  const [options, setOptions] = useState([]);
  const [inputValue, setInputValue] = React.useState("");
  const [pokeName, setPokeName] = React.useState("");
  

  const { pokesData, pokes } = useSelector((state) => state.poke);
  

  const getOptionsDelayed = useCallback(
    debounce((text, callback) => {
      setOptions([]);

      getOptionsAsync(text).then(callback);
    }, 200),
    []
  );

  useEffect(() => {
    if(options.length===1 )
    show(options[0],true);
  }, [options]);
  

  useEffect(() => {
    getOptionsDelayed(inputValue, (filteredOptions) => {
      setOptions(filteredOptions);
    });

  }, [inputValue, getOptionsDelayed]);

  pokesArr = pokes;
  
  return (
    <Autocomplete
      freeSolo={false}
      options={options}
    
      getOptionLabel={(option) => option.name}
      // disable filtering on client
      filterOptions={(x) => x}
      loading={options.length === 0}
      onInputChange={(e, newInputValue) => setInputValue(newInputValue)}
      renderInput={(params) => <TextField {...params} label="PokeSearch" />}
      sx={{ width: 300 }}
    />
  );
}

export default DebouncedSearch;

// ReactDOM.render(<App />, document.querySelector('#app'));
