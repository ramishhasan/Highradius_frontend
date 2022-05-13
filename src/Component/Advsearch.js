import { Dialog,DialogContent,DialogTitle,TextField } from "@mui/material";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function Advsearch({doc_id,cust_number,buisness_year,invoice_id,changehandlersearch,open,handleClose,changeHandler,submitHandler}){
    return(
        <div>
            <Dialog fullWidth maxWidth="sm" open={open} onClose={handleClose} >
                <Box style={{backgroundColor: "rgb(31,51,71)"}}>
                    <DialogTitle style={{color:"white"}}>Advance Search</DialogTitle>
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
                                    name='doc_id'
                                    margin="dense"
                                    id="doc_id"
                                    label="Document Id"
                                    type="number"
                                    fullWidth
                                    value={doc_id}

                                    onChange={changehandlersearch}
                                    InputProps={{style: {backgroundColor:"white"}, disableUnderline: true}}
                                    variant="filled"
                                    />
                                    <TextField
                                        name='cust_number'
                                        autoFocus
                                        margin="dense"
                                        id="cust_number"
                                        label="Customer Number"
                                        type="number"
                                        fullWidth
                                        value={cust_number}
                                        onChange={changehandlersearch}
                                        InputProps={{style: {backgroundColor:"white"}, disableUnderline: true}}
                                        variant="filled"
                                        />
                                        <TextField
                                            autoFocus
                                            name='invoice_id'
                                            margin="dense"
                                            id="invoice_id"
                                            label="Invoice id"
                                            type="text"
                                            fullWidth
                                            value={invoice_id}
                                            onChange={changehandlersearch}
                                            InputProps={{style: {backgroundColor:"white"}, disableUnderline: true}}
                                            variant="filled"
                                            />
                                            <TextField 
                                                autoFocus
                                                name='buisness_year'
                                                margin="dense"
                                                id="buisness_year"
                                                label="Buisness Year"
                                                type="number"
                                                fullWidth
                                                value={buisness_year}
                                                onChange={changehandlersearch}
                                                InputProps={{style: {backgroundColor:"white"}, disableUnderline: true}}
                                                variant="filled"
                                                />
                            </Box>

                    </DialogContent>
                    <DialogActions>
                        <Button variant="outlined" onClick={()=>handleClose(false)} style={{color:'white',flexBasis:'49%'}}>Cancel</Button>
                        <Button  variant="outlined" onClick={()=>handleClose(true)} style={{color:'white',flexBasis:'49%'}}>SEARCH</Button>
                    </DialogActions>
                </Box>
            </Dialog>
        </div>
    );
}