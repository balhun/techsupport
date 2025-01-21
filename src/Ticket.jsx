import { Button, TextField } from "@mui/material";

export default function Ticket(){
    return(
        <div>
            <TextField
            id="outlined-multiline-static"
            label="Multiline"
            multiline
            rows={4}
            defaultValue="Default Value"
            />
            <Button>Kuldes</Button>
        </div>
    )
}