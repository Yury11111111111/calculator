import React, { FC, useContext } from "react";
import { NumberContext } from "./NumberProvider";

interface IFunction {
  buttonValue: string;
}

const FunctionButton: FC<IFunction> = ({ buttonValue }) => {
  const { handleSetCalcFunction } = useContext(NumberContext);
  return (
    <button
      className="function-button"
      type="button"
      onClick={() => handleSetCalcFunction(buttonValue)}
    >
      {buttonValue}
    </button>
  );
};

export default FunctionButton;
