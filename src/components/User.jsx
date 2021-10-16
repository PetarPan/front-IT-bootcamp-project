/** @format */

import React from "react";
import { UserSt } from "../styledComponents/UserSt.style";

const User = ({ u }) => {
  return (
    <UserSt>
      <main >
        <div className="one">
          <p>Contract Number: {u.CID}</p>
          <p>Name: {u.name}</p>
          <p>Surname: {u.surname}</p>
          <p>City: {u.city}</p>
          <p>Addres: {u.address}</p>
          <p>E - mail: {u.email}</p>
        </div>
      </main>
    </UserSt>
  );
};

export default User;
