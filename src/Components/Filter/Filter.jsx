import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Slider,
} from "@mui/material";
import React from "react";

const Filter = ({ category, setCategory, price, setPrice }) => {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">По категориям</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="all"
        name="radio-buttons-group"
        value={category}
        onChange={e => setCategory(e.target.value)}>
        <FormControlLabel value="man" control={<Radio />} label="Man" />
        <FormControlLabel value="woman" control={<Radio />} label="Woman" />
      </RadioGroup>
      <FormLabel id="demo-radio-buttons-group-label">По ценам</FormLabel>
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={price}
        onChange={e => setPrice(e.target.value)}
        valueLabelDisplay="auto"
        min={0}
        max={500}
      />
    </FormControl>
  );
};

export default Filter;
