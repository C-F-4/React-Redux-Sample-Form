import React from 'react'
import { TextField } from '@material-ui/core'

function InputParams() {
  return (
    <div className="wrapper--input-params">
      <form className="form--input-params" noValidate autoComplete="off">
        <TextField id="standard-basic" label="Index of Label Column" />
      </form>
    </div>
  )
}

export default InputParams
