import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from "@mui/material/Box";

export default function Edit({open,sl_no,invoice_currency,cust_payment_terms,changeHandler,submitHandler,handleClose}) {


  return (
    <div>
    <Dialog fullWidth maxWidth="sm" open={open} onClose={handleClose} >
        <Box style={{backgroundColor: "rgb(31,51,71)"}}>
            <DialogTitle style={{color:"white"}}>UPDATE</DialogTitle>
            <DialogContent>
                <Box 
                    component="form"
                    sx={{
                        '& > :not(style)': {m:1, width: '25ch'},
                    }}
                    noValidate
                    autoComplete="off"
                    >
                            
                      
          <TextField
            autoFocus
            name='invoice_currency'
            margin="dense"
            id="invoice_currency"
            value={invoice_currency}
            label="invoice_currency"
            type="text"
            fullWidth
            onChange={changeHandler}
            InputProps={{style: {backgroundColor:"white"}, disableUnderline: true}}

            variant="filled"
          />
          <TextField
            autoFocus
            name='cust_payment_terms'
            margin="dense"
            id="cust_payment_terms"
            label="cust_payment_terms"
            value={cust_payment_terms}
            type="text"
            fullWidth
            onChange={changeHandler}
            InputProps={{style: {backgroundColor:"white"}, disableUnderline: true}}

            variant="filled"
          />
                           
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
