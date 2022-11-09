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
      <FormLabel id="demo-radio-buttons-group-label">BY CATEGORIES</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="all"
        name="radio-buttons-group"
        value={category}
        onChange={e => setCategory(e.target.value)}>
        <FormControlLabel value="man" control={<Radio />} label="MAN" />
        <FormControlLabel value="woman" control={<Radio />} label="WOMAN" />
        <FormControlLabel
          value="all"
          control={<Radio />}
          label="ALL PRODUCTS"
        />
      </RadioGroup>
      <FormLabel id="demo-radio-buttons-group-label">AT PRICES</FormLabel>
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={price}
        onChange={e => setPrice(e.target.value)}
        valueLabelDisplay="auto"
        min={0}
        max={100000}
      />
    </FormControl>
  );
};

export default Filter;
