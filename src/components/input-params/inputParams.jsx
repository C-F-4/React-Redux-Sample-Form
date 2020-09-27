import React from 'react'
import { CardHeader, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@material-ui/core'

function InputParams() {
  return (
    <div className="wrapper--input-params">
      <CardHeader title="Input Params"></CardHeader>
      <form className="form--input-params" noValidate autoComplete="off">
        <FormControl fullWidth={true}>
          <TextField label="Index of Label Column" />
        </FormControl>
        <FormControl fullWidth={true}>
          <FormLabel className="text-left">Automatic Cat. Column Flag</FormLabel>
          <RadioGroup aria-label="auto-cat-column" name="autoCatColumn">
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
        <FormControl fullWidth={true}>
          <TextField label="Categorical Columns" />
        </FormControl>
      </form>
    </div>
  )
}

export default InputParams
