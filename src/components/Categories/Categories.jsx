import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material'
import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/MoveToInbox";

import React from 'react'

function Categories({show,categories}) {
  return (
    <div>
    <Toolbar />
    <Divider />
    <List>
      {
        <ListItem button onClick={() => show("all")} id={null}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="All" />
        </ListItem>
      }
      {categories &&
        categories.map((text, index) => (
          <ListItem
            key={text}
            onClick={() => show(text)}
            disablePadding
          >
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText
                primary={text.charAt(0).toUpperCase() + text.slice(1)}
              />
            </ListItemButton>
          </ListItem>
        ))}
    </List>
    <Divider />
  </div>
  )
}

export default Categories