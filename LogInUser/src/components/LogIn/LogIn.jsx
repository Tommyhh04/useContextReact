import React from "react";
import { createContext, useContext, useState } from "react";

const CurrentUserContext = createContext(null);

//Creates a log in function for a static(hard coded) user profile
export default function LogIn() {
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <CurrentUserContext.Providervalue
      value={{
        currentUser,
        setCurrentUser,
      }}
    >
      <Form />
    </CurrentUserContext.Providervalue>
  );
}
