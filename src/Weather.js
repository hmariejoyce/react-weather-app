import React from "react";
import axios from "axios";
import { Puff } from "react-loader-spinner";

export default function Weather() {
  return (
    <Puff
      height="80"
      width="80"
      radius="9"
      color="orange"
      ariaLabel="loading"
      wrapperStyle
      wrapperClass
    />
  );
}
