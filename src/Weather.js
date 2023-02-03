import React from "react";
import { Puff } from "react-loader-spinner";

export default function Weather() {
  return (
    <div>
      <Puff
        height="80"
        width="80"
        radius="9"
        color="orange"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
    </div>
  );
}
