import { Box, Button, Divider } from "@mui/material";
import TextField from '@mui/material/TextField';

function AddUser() {
  return (
    <div>
      <h3 className="pb-2 text-xl">AddUser</h3>
      <Divider className="mb-2" />
      <div className="flex flex-col items-center">
      <TextField className="w-1/2" label="Name" variant="standard" fullWidth />
      <TextField className="w-1/2 mt-2" label="Address" variant="standard" fullWidth />
      <TextField className="w-1/2 mt-2" label="Contact" variant="standard" fullWidth/>
      <Button className="px-8 mt-4 bg-green-600 hover:bg-green-400 hover:text-black" sx={{ color: '#fff' }}>Save User</Button>
      </div>
    </div>
  );
}

export default AddUser;
