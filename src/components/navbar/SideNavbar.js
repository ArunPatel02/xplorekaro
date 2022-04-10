import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";

export default function SideNavbar({ optionhead, options }) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: "100%"}}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={handleClick}>
        <ListItemText
          primary={optionhead}
          sx={{
            "& span" : {
            color: "white",
            fontSize: "1.6rem",
            fontWeight: "600",
            textTransform: "capitalize",
            cursor : "pointer"
            }
          }}
        />
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {options.map((option, index) => {
            return (
              <ListItemButton sx={{ pl: 4 }} key={index} >
                <ListItemText
                  primary={option}
                  sx={{
                    "& span" : {
                      color: "white",
                      fontSize: "1.4rem",
                      textTransform: "capitalize",
                      cursor : "pointer"
                      }
                  }}
                />
              </ListItemButton>
            );
          })}
        </List>
      </Collapse>
    </List>
  );
}
