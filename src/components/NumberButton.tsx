import React, { FC, useContext } from "react";
import { NumberContext } from "./NumberProvider";

interface INumber {
  buttonValue: number | string;
}

const NumberButton: FC<INumber> = ({ buttonValue }) => {
  const { handleSetDisplayValue } = useContext(NumberContext);
  return (
    <button type="button" onClick={() => handleSetDisplayValue(buttonValue)}>
      {buttonValue}
    </button>
  );
};

export default NumberButton;
