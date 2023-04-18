//importing use effect -- jb bhi all users ka component mount hoga virtual dom me to api se saray users ka data fetch hpjaye, na k jese hum add user k button se krhy thy form me
import React, { useEffect , useState } from "react";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  styled,
  Button,
} from "@mui/material";
import { getUsers, deleteUser } from "../service/api";

const StyledTable = styled(Table)`
  width:90%;
  margin:50px auto 0 auto;
`
const THead = styled(TableRow)`
  background:#000000;
  & > th {
    color:#fff;
    font-size:18px;
  }
`
const TBody = styled(TableRow)`
  & td {
    font-size:16px;
  }

`


export default function AllUsers() {

  const [user,setUser] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  async function getAllUsers() {
    const result = await getUsers();
    setUser(result.data);
  }

  async function deleteUserDetails(id){
    await deleteUser(id);
    //to referesh data 
    getAllUsers();


  }
  const allUsers = user.map(item =>(
    <TBody key={item._id}>
          <TableCell>{item._id}</TableCell>
          <TableCell>{item.name}</TableCell>
          <TableCell>{item.username}</TableCell>
          <TableCell>{item.email}</TableCell>
          <TableCell>{item.phone}</TableCell>
          <TableCell>
            <Button variant="contained" style={{ marginRight:8 }} component={Link} to={`/edit/${item._id}`} >Edit</Button>
            <Button variant="contained" color="secondary" onClick={()=>deleteUserDetails(item._id)} >Delete</Button>
          </TableCell>
    </TBody>
  ))

  return (
    <StyledTable>
      <TableHead>
        <THead>
          <TableCell>ID</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell></TableCell>
        </THead>
      </TableHead>
      <TableBody>
        {user && allUsers}
      </TableBody>
    </StyledTable>
  );
}
