import React from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Alert from '@mui/material/Alert';

const App = () => {
  let handclicked = () => {
    console.log("clicked")
  }

  return (
    <>
      <h1>Material UI Demo</h1>
      <Button
        variant="contained"
        onClick={handclicked}
        startIcon={<DeleteIcon />}
      >
        Deleted
      </Button>

      <Alert severity="info">This is a warning Alert.</Alert>
      {/* <Button variant="contained" onClick={handclicked} color='error' >Clicked Me</Button> */}

    </>
  )
}

export default App