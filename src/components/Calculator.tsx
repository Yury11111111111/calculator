import React from "react";
import NumberButton from "./NumberButton";
import FunctionButton from "./FunctionButton";
import ClearButton from "./ClearButton";
import Display from "./Display";
import EqualButton from "./EqualButton";
import BackButton from "./BackButton";
import NegativeButton from "./NegativeButton";

const Calculator = () => {
  return (
    <div className="container">
      <div className="display">
        <h1 className="display__title">Сalculator</h1> <br />
        <Display />
      </div>
      <div className="number-pad">
        <div className="first-row">
          <ClearButton />
          <BackButton />
          <NegativeButton />
          <FunctionButton buttonValue="/" />
        </div>

        <div className="second-row">
          <NumberButton buttonValue={7} />
          <NumberButton buttonValue={8} />
          <NumberButton buttonValue={9} />
          <FunctionButton buttonValue="*" />
        </div>

        <div className="third-row">
          <NumberButton buttonValue={4} />
          <NumberButton buttonValue={5} />
          <NumberButton buttonValue={6} />
          <FunctionButton buttonValue="-" />
        </div>

        <div className="fourth-ro">
          <NumberButton buttonValue={1} />
          <NumberButton buttonValue={2} />
          <NumberButton buttonValue={3} />
          <FunctionButton buttonValue="+" />
        </div>
        <div className="fifth-row">
          <NumberButton buttonValue={0} />
          <NumberButton buttonValue="." />
          <EqualButton />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
