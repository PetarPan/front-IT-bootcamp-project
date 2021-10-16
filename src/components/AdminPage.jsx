import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllUsers } from "../service";
import Select from "../styledComponents/Select";
import Users from "./Users";


const AdminPage = ({loggedIn, setUsers}) => {
    const[user, setUser] = useState([])
    const [search, setSearch] = useState('')
    const logOut = () => {
        setUsers(null)
    } 
    let filtrirane = user.filter(u => u.name.toLowerCase().includes(search.toLowerCase()))
    
   useEffect(()=>{
    getAllUsers().then(res=>{
        setUser(res.data)
    })
   },[])

   let tmp = [{...user}]
   
    return ( 
        
        <div>
            <input onChange = {(e)=>{
         setSearch(e.target.value)
      }}/>
        <select>
            <option value='-1' disabled>Choose launch</option>
            <option value={tmp} onChange={()=> {
                
            }}>All</option>
          <option onChange={()=>{
              tmp.splice(0,10)
          }}>10</option>
          <option onChange={()=>{
              tmp.splice(0,20)
          }}>20</option>
          <option onChange={()=>{
              tmp.splice(0,30)
          }}>30</option>
        </select>
        <Link to='/' onClick={logOut}>Logout</Link>
        <Users user={filtrirane}/>

        </div>
        
     );
}
 
export default AdminPage;