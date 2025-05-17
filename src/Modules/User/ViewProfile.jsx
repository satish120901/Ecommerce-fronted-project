import { useEffect, useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../../src/Product.css'

function ViewProfile(){
     const[items,setItems] =useState([]);

     const userJson = localStorage.getItem("user");
    const {username,userId,name,password,email,address} = JSON.parse(userJson);


    
 
    return (
        
        <div>
       <h1 style={{textAlign:"center"}}>Customer Data</h1>
       <table className='table table-hover'  style={{margin:'auto', textAlign:'center',marginTop:'50px'}}>
        <thead>
            <tr>
            <th>ID</th>
            <th>Name</th>
            <th>UserName</th>
            <th>Password</th>
            <th>Email</th>
            <th>Address</th>
            </tr>
        </thead>
        <tbody>    
            <tr >
                    <td>{userId}</td>
                    <td>{name}</td>
                    <td>{username}</td>
                    <td>{password}</td> 
                    <td>{email}</td>
                    <td>{address}</td>
                    {/* <td><img src={'data:image/jpeg;base64,'+image} height={50} width={50}/></td> */}
                     
                    </tr>
                   </tbody>
    </table>
    

        </div>
      )
}
export default ViewProfile;