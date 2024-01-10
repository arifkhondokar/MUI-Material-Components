import React from 'react'
import InboxIcon from '@mui/icons-material/Inbox'
import CameraAltTwoToneIcon from '@mui/icons-material/CameraAltTwoTone';
import MailIcon from '@mui/icons-material/Mail';
import { Box, List, ListItem, ListItemText, ListItemButton, ListItemIcon, Divider, ListItemAvatar, Avatar } from '@mui/material'


const MuiList = () => {

  return (
    <>
    <Box sx={{ width: '400px', bgcolor: '#ef9a9a', color: '#ffffff' }}>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              {/* <InboxIcon /> */}
              <MailIcon/>
            </ListItemIcon>
            <ListItemText primary='List item 1' />
          </ListItemButton>
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemAvatar>
            <Avatar>
              {/* <InboxIcon /> */}
              <CameraAltTwoToneIcon/>
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary='List item 2' secondary='Secondary text' />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText  primary='List item 3' secondary='Secondary text'  />
        </ListItem>
      </List>
    </Box>


    </>
  )
}

export default MuiList