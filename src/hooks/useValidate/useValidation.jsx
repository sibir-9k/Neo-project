import { useState, useEffect } from "react";

export const useValidation = (value, validations) => {

  const [isEmpty, setEmpty] = useState(true)
  const [minLengthError, setMinLengthError] = useState(false)
  const [inputValid, setInputValid] = useState(false)


  useEffect(() => {
    for (const validation in validations) {
      // eslint-disable-next-line default-case
      switch (validation) {
        case 'minLength':
          value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false)
          break;
        case 'isEmpty':
          value ? setEmpty(false) : setEmpty(true)
          break;
      }
    }
  }, [value])

  useEffect(() => {
    if (isEmpty) {
      setInputValid(false)
    } else {
      setInputValid(true)
    }
  }, [isEmpty])

  return {
    isEmpty,
    minLengthError,
    inputValid
  }
  
}

export const useInput = (initialValue, validations) => {

  const [value, setValue] = useState(initialValue)
  const [isDirty, setDirty] = useState(false)
  const valid = useValidation(value, validations)

  const onChange = (e) => {
    setValue(e.target.value)
  }

  const onBlur = (e) => {
    setDirty(true)
  }

  return {
    value,
    onChange,
    onBlur,
    isDirty,
    ...valid
  }
  
}

