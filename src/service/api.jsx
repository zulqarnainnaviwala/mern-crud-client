import axios from "axios";

const URL = "http://localhost:8000";

// creating a function for adding user and exsporting it
// post api o zariyeh data bhejna hai , use usky return me response bhi krna hai
//arguments in post URL,with endpoint and data

// export function addUser(data) {
//   try {
//     return axios.post(`${URL}/add`, data);
//   } catch (error) {
//     console.log(`Error while calling add user api ${error}`);
//   }
// }

//converting above api call to async 
export async function addUser(data) {
    try {
      return await axios.post(`${URL}/add`, data);
    } catch (error) {
      console.log(`Error while calling add user api ${error}`);
    }
   }

  export async function getUsers(){
    try{
       return await axios.get(`${URL}/all`) //returns a datd , put a return to get it

    }
    catch(error){
      console.log(`Error while calling get users api ${error}`)
    }
  }

  export async function getUser(id){
    
    try{
      return await axios.get(`${URL}/${id}`) //returns a datd , put a return to get it

   }
   catch(error){
     console.log(`Error while calling get user api ${error}`)
   }
  }

  export async function editUser(user, id){
    
    try{
      // return await axios.post(`${URL}/${id}`, user)
      return await axios.put(`${URL}/${id}`, user)

   }
   catch(error){
     console.log(`Error while calling eidt user api ${error}`)
   }
  }

  
  export async function deleteUser(id){
    
    try{
      return await axios.delete(`${URL}/${id}`)

   }
   catch(error){
     console.log(`Error while calling delete user api ${error}`)
   }
  }
