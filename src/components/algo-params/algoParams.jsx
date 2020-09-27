import React from 'react'
import { Card, CardHeader, CardContent, FormControl, FormControlLabel, FormLabel, Input, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from '@material-ui/core'

function AlgoParams() {
  return (
    <Card className="card">
      <CardHeader title="Algo Params" className="card--header"></CardHeader>
      <CardContent className="card--body">
        <form className="form--algo-params" noValidate autoComplete="off">
          <FormControl fullWidth={true}>
            <FormLabel className="text--left">Hyperparameter tuning</FormLabel>
            <RadioGroup aria-label="hyperparameter-tuning" name="hyperparameterTuning">
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
          <FormControl fullWidth={true}>
            <FormLabel className="text--left">K Fold Flag</FormLabel>
            <RadioGroup aria-label="k-fold-flag" name="kFoldFlag">
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
          <FormControl fullWidth={true}>
            <InputLabel id="train-test-split-type" className="text--left">Train Test Random Split Type</InputLabel>
            <Select labelId="train-test-split-type" className="text--left">
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"trainTestRandomSplitType"}>trainTestRandomSplitType</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth={true}>
            <FormLabel className="text--left">Training Data Percentage</FormLabel>
            <Input type="number" inputProps={{ step: "0.1" }} />
          </FormControl>
          <FormControl fullWidth={true}>
            <FormLabel className="text--left">Test Data Percentage</FormLabel>
            <Input type="number" inputProps={{ step: "0.1" }} />
          </FormControl>
          <FormControl fullWidth={true}>
            <FormLabel className="text--left">Maximum Depth of Tree</FormLabel>
            <Input type="number" />
          </FormControl>
          <FormControl fullWidth={true}>
            <FormLabel className="text--left">Maximum Number of Bins</FormLabel>
            <Input type="number" />
          </FormControl>
        </form>
      </CardContent>
    </Card>
  )
}

export default AlgoParams
