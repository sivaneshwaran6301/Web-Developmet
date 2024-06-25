import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './DataTable.css'
function Users(){

    const [data, setData] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            try{
                const response = await axios.get('https://api.escuelajs.co/api/v1/users');
                setData(response.data);
            }
            catch(error){
                console.error(error);
            }
        }
        fetchData();
    }, []);

    

    return(
        <>
        <div id='tablecontainer'>
           
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>Email</th>
          <th>Avatar</th>
          <th>created data</th>
          
        </tr>
      </thead>
      <tbody>
         {data.map((item) => (
          <tr key={item.id}>
             <td>{item.id}</td>
            <td>{item.email}</td>
            <td><a href={item.avatar} target='.blank'>{item.name}</a></td>
            <td>{item.creationAt}</td>
          </tr>
        ))} 
      </tbody>
    </table>
        </div>
        </>
    )
}
export default Users