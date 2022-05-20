import React, { useCallback, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
// import Autocomplete from '@mui/lab/Autocomplete';
import { Autocomplete } from '@mui/material'
import TextField from '@mui/material/TextField';
import debounce from 'lodash/debounce';
import { useSelector } from 'react-redux';

const option = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
]

function DebouncedSearch({show}) {
  const [options, setOptions] = React.useState([]);
const [inputValue, setInputValue] = React.useState('');
const { pokesData, pokes } = useSelector((state) => state.poke);
const getOptionsDelayed = React.useCallback(
  debounce((text, callback) => {
    setOptions([]);
    getOptionsAsync(text).then(callback);
  }, 200),
  [],
);



React.useEffect(() => {
  getOptionsDelayed(inputValue, (filteredOptions) => {
    setOptions(filteredOptions);
  });
}, [inputValue, getOptionsDelayed]);

const getOptionsAsync = (query) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        option.filter(
          (o) => o.name.toLowerCase().indexOf(query.toLowerCase()) > -1,
        ),
      );
    }, 1500);
  });
};

if (!pokes) {
  return null;

}

  return (
    <Autocomplete
      options={options}
      getOptionLabel={(option) => option.title}
      // disable filtering on client
      filterOptions={(x) => x}
      loading={options.length === 0}
      onInputChange={(e, newInputValue) => setInputValue(newInputValue)}
      renderInput={(params) => <TextField {...params} label="Combo box" />}
    />
  )
}

export default DebouncedSearch