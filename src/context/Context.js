import React, { createContext, useState } from 'react';

const Context = createContext();

const CarsProvider = ({ children }) => {
  const [cars, setCars] = useState({
    red: false,
    blue: false,
    yellow: false,
  });

  const moveCar = (car, side) => {
    setCars({
      ...cars,
      [car]: side,
    });
  }

  const context = { cars, moveCar};
  console.log(Context);
  return (

    <Context.Provider value={context}>
      {children}
      {console.log(Context)}
    </Context.Provider>
  );
};

export { Context, CarsProvider as Provider };
