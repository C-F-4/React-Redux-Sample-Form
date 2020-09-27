import React from 'react'
import { TextField } from '@material-ui/core'

function AlgoParams() {
  return (
    <div className="wrapper--algo-params">
      <form className="form--algo-params" noValidate autoComplete="off">
        <TextField id="standard-basic" label="Index of Label Column" />
      </form>
    </div>
  )
}

export default AlgoParams
