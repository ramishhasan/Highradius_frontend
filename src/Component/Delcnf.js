import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from "@mui/material/Box";

export default function Addata({open,handleClosedelcnf,handleClose}) {


  return (
    <div>
      
    <Dialog fullWidth maxWidth="sm" open={open} onClose={handleClosedelcnf} >
        <Box style={{backgroundColor: "rgb(31,51,71)"}}>
            <DialogTitle style={{color:"white"}}>ARE YOU SURE THAT YOU WANT TO DELETE THE RECORD?</DialogTitle>
            <DialogContent>
                <Box 
                    component="form"
                    sx={{
                        '& > :not(style)': {m:1, width: '25ch'},
                    }}
                    noValidate
                    autoComplete="off"
                    >
                           
                    </Box>

            </DialogContent>
            <DialogActions>
                <Button variant="outlined" onClick={()=>handleClose(false)} style={{color:'white',flexBasis:'49%'}}>CANCEL</Button>
                <Button variant="outlined" onClick={()=>handleClose(true)} style={{color:'white',flexBasis:'49%'}}>UPDATE</Button>
            </DialogActions>
        </Box>
    </Dialog>
    </div>
  );
}
