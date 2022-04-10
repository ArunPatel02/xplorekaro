import * as React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, value, theme) {
  return {
    fontWeight:
      value.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const SelectHelper = (props) => {
  const { options, border, placeholder, ...rest } = props;
  const theme = useTheme();
  const [value, setvalue] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setvalue(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <FormControl>
      <Select
        displayEmpty
        value={value}
        onChange={handleChange}
        input={<OutlinedInput />}
        varient="standard"
        sx={
          border
            ? ""
            : {
                "& fieldset": { border: "none" },
                "& div": {
                  padding: "0px 10px",
                  height: "auto !important",
                  paddingRight: "32px",
                },
              }
        }
        renderValue={(selected) => {
          if (selected.length === 0) {
            return <span>{placeholder}</span>;
          }

          return selected.join(", ");
        }}
        MenuProps={MenuProps}
        inputProps={{ "aria-label": "Without label" }}
        {...rest}
      >
        {options.map((name) => (
          <MenuItem
            key={name}
            value={name}
            style={getStyles(name, value, theme)}
          >
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectHelper;
