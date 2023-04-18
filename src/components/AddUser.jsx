import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
  styled,
} from "@mui/material";
import { addUser } from "../service/api";

// css
const FormContainer = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;

export default function AddUser() {
  
  const [formData,setFormData] = useState({
    name:"",
    username:"",
    email:"",
    phone:"" 
  })

  //useNavigate  returns a  function when we call it we need to pass an argument(URL to navigate)
  const navigate = useNavigate();

  function handleChange(event) {
    // console.log(event.target.name, event.target.value)
    setFormData(formData => ({
      ...formData,
      [event.target.name]:event.target.value
    }))
  }

  // function addUserDetails(){
  //   addUser(formData);
  // }
  //converting above to async await too.
  async function addUserDetails(){
    await addUser(formData);
    navigate('/all')
  }

  return (
    <FormContainer>
      <Typography variant="h4">Add User</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        {/* <Input name="name" onChange={handleChange}/> */}
        <Input name="name" onChange={(event) => handleChange(event)} />
      </FormControl>
      <FormControl>
        <InputLabel>Username</InputLabel>
        <Input name="username" onChange={(event) => handleChange(event)} />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input name="email" onChange={(event) => handleChange(event)} />
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input name="phone" onChange={(event) => handleChange(event)} />
      </FormControl>
      <FormControl>
        <Button variant="contained" onClick={()=> addUserDetails()}>Add User</Button>
      </FormControl>
    </FormContainer>
  );
}
