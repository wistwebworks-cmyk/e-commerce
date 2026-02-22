import React from 'react'
import MyContext from './myContext';

function MyState(props) {
    
    
  return (
    <MyContext.Provider value={{}}>
       {props.children}
    </MyContext.Provider>
  )
}

export default MyState