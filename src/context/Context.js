
import React, { createContext, useState } from 'react';

const Context = createContext();

const CarsAndSignalProvider = ({ children }) => {
  const [cars, setCars] = useState({
    red: false,
    blue: false,
    yellow: false,
  })

  const moveCar = (car, side) => {
    setCars({
      ...cars,
      [car]: side,
    })
  }

  const [signal, setSignal] = useState({color: 'red'})

  const changeSignal = (signalColor) => {
    setSignal({
      color: signalColor,
    })
  }

  const context = { cars, signal, moveCar, changeSignal };

  return (
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  )
}

export { Context, CarsAndSignalProvider as Provider };
