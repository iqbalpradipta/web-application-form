import { Box, IconButton, List, ListItem, ListItemText } from '@mui/material'
import { HiMiniMagnifyingGlassCircle } from "react-icons/hi2";
import React from 'react'

function ListForm() {
  return (
    <>
      <List
        sx={{
          width: '100%',
          maxWidth: 360,
          bgcolor: 'background.paper',
          mx: 'auto',
        }}
      >
        {[1, 2, 3].map((value) => (
          <ListItem
            sx={{
              border: '1px solid gray',
              borderRadius: '10px',
              mt: '10px',
              justifyContent: 'center',
              display: 'flex',
              alignItems: 'center', 
            }}
            key={value}
            disableGutters
            secondaryAction={
              <IconButton aria-label="comment">
                <HiMiniMagnifyingGlassCircle />
              </IconButton>
            }
          >
            <ListItemText primary={`Nama: Employee ${value}`} sx={{ ml: '10px' }} />
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default ListForm;
