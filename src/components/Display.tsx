import React, { FC, useContext } from "react";
import { NumberContext } from "./NumberProvider";

const Display: FC = () => {
  const { number, storedNumber, functionType } = useContext<any>(NumberContext);

  return (
    <div>
      <h2 className="display__number">{!number.length && !storedNumber ? "0" : number || storedNumber}</h2>
      <p className="display__result">
        {!storedNumber
          ? "ENTER SOME NUMBERS"
          : `${storedNumber} ${functionType} ${number}`}
      </p>
    </div>
  );
};

export default Display;
