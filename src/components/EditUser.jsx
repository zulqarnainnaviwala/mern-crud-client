import React, { useState , useEffect } from "react";
import {useNavigate , useParams} from 'react-router-dom'
import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
  styled,
} from "@mui/material";
// import { editUser } from "../service/api";
import { getUser, editUser } from "../service/api"

// css
const FormContainer = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;

export default function EditUser() {
  
  const [formData,setFormData] = useState({
    name:"",
    username:"",
    email:"",
    phone:""
  })

  //useNavigate  returns a  function when we call it we need to pass an argument(URL to navigate)
  const navigate = useNavigate();
  const {id} = useParams(); 

  //to get previous data in edit form
  useEffect(()=>{
    loadUserDetails();
  }, [])

  async function loadUserDetails(){
    // await getUser(id)
    const response = await getUser(id);
    // console.log("data in response object", response.data)
    setFormData(response.data)

  }

  function handleChange(event) {
    // console.log(event.target.name, event.target.value)
    setFormData(formData => ({
      ...formData,
      [event.target.name]:event.target.value
    }))
  }

  // function editUserDetails(){
  //   editUser(formData);
  // }
  //converting above to async await too.
  async function editUserDetails(){
    await editUser(formData, id);
    navigate('/all')
  }

  return (
    <FormContainer>
      <Typography variant="h4">Edit User</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        {/* <Input name="name" onChange={handleChange}/> */}
        <Input name="name" onChange={(event) => handleChange(event)} value={formData.name} />
      </FormControl>
      <FormControl>
        <InputLabel>Username</InputLabel>
        <Input name="username" onChange={(event) => handleChange(event)} value={formData.username}/>
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input name="email" onChange={(event) => handleChange(event)} value={formData.email} />
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input name="phone" onChange={(event) => handleChange(event)} value={formData.phone}/>
      </FormControl>
      <FormControl>
        <Button variant="contained" onClick={()=> editUserDetails()}>Update User</Button>
      </FormControl>
    </FormContainer>
  );
}
