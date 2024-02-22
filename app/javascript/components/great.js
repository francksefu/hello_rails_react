import React from "react";
import { useSelector } from "react-redux";

export const Great = () => {
  const user = useSelector((state) => state.user)
  let valeur = "";

  if (user.status == "succeeded") {
    valeur = user.data.greeting
  }
  return(
    <h1>{valeur}</h1>
  );
}

export default Great;