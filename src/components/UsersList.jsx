import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Divider } from "@mui/material";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Link from "next/link";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Kasun", "Bandaragama", "0771234546"),
  createData("Nuwan", "Colombo", "0711234546"),
  createData("Gimhan", "Horana", "0721234546"),
  createData("Dasun", "Kalutara", "0761234546"),
  createData("Nimal", "Panadura", "0751234546"),
  createData("Sampath", "Piliyandala", "0761234546"),
];

function UsersList() {
  return (
    <div>
      <h3 className="pb-2 text-xl">UsersList</h3>
      <Divider className="mb-2"/>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Location</TableCell>
              <TableCell align="right">Contact</TableCell>
              <TableCell align="right">Options</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">
                  <Link href={"/addUser"}><Button className="mr-1 bg-yellow-100"><EditOutlinedIcon className="text-yellow-600" /></Button></Link>
                  <Button className="bg-red-100"><DeleteOutlineOutlinedIcon className="text-red-600" /></Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default UsersList;
