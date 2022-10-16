import React, { FC } from 'react';
import Calculator from './components/Calculator';
import NumberProvider from './components/NumberProvider';
import "./style/App.scss"

const App: FC = () => (
  <NumberProvider number={''} props={undefined} storedNumber={''} functionType={''}>
    <Calculator />
  </NumberProvider>
);

export default App;