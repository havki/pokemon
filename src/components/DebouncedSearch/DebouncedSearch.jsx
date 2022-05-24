import React, { useCallback, useEffect, useState } from "react";
import Autocomplete from "@mui/lab/Autocomplete";
import TextField from "@mui/material/TextField";
import debounce from "lodash/debounce";
import { useSelector } from "react-redux";

let pokesArr = null;
const getOptionsAsync = (query) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        pokesArr.results.filter((o) => o.name.indexOf(query.toLowerCase()) > -1)
      );
    }, 1000);
  });
};

function DebouncedSearch({ show, clear = false }) {
  const [options, setOptions] = useState([]);
  const [inputValue, setInputValue] = React.useState("");
  const { pokes } = useSelector((state) => state.poke);
  const getOptionsDelayed = useCallback(
    debounce((text, callback) => {
      setOptions([]);

      getOptionsAsync(text).then(callback);
    }, 200),
    []
  );
  
  useEffect(() => {
    setOptions([]);
    setInputValue("");
  

    return () => {};
  }, [clear]);

  useEffect(() => {
    if (options.length === 1 && options[0].name === inputValue) {
      show(options[0], true);
    }
  }, [options]);

  useEffect(() => {
    getOptionsDelayed(inputValue, (filteredOptions) => {
      setOptions(filteredOptions);
    });
  }, [inputValue, getOptionsDelayed]);

  pokesArr = pokes;

  return (
    <Autocomplete
      options={options}
      getOptionLabel={(option) => option.name}
      filterOptions={(x) => x}
      loading={options.length === 0}
      onInputChange={(e, newInputValue) => setInputValue(newInputValue)}
      renderInput={(params) => <TextField {...params} label="PokeSearch" />}
      sx={{ width: 300 }}
    />
  );
}

export default DebouncedSearch;
