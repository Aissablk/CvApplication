import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
   

export function Buttons({onClick}){
    return (
        <Stack spacing={2} direction="row">
            <Button type='submit' onClick={onClick} > Add </Button>
        </Stack>
    )
}