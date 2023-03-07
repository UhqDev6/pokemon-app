import React, { useState } from 'react';

function useInput(defaultValue = '') {
  const [value, setValue] = useState(defaultValue);

  const handleValueChange = ({ target }) => {
    setValue(target.value);
  };

  const handleValueReset = () => {
    setValue('');
  };

  return [value, setValue, handleValueChange, handleValueReset];
}

export default useInput;
