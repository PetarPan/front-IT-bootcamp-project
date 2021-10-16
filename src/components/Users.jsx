import React from "react";
import User from "./User";

const Users = ({user}) => {
    return (
       /*  <div>
          {user.map((u) => (<User key={u.id} u={user} />))}
        </div> */
        
        <div >
       
           { user.map(u => <User key={u.id} u={u} />).splice(1,user.length)}
             
             </div>
             
      );
    };
 
export default Users;