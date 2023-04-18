import React, { useMemo, useState } from 'react';
import Context from './Context';


function Provider({ children }) {
  const [valueTotal, setValueTotal] = useState(0);

  const contextValue = useMemo(
    () => ({
      valueTotal,
      setValueTotal
    }), [valueTotal] )
  
  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  )
}
export default Provider;