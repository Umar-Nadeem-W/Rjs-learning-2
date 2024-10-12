import { useReducer, useState } from 'react'


function App() {
  const [redstate, dispatch] = useReducer(reducer,0) //first argument is a function and second argument is default state value in te useReducer hook
  function reducer(redstate, action){ // in the reducer function, first argument is the sate, second the action object
      if(action.type=="increment"){return redstate + action.payload }
      else if(action.type == "decrement"){return redstate- action.payload}
      
  }

  return (
    <div>
      <div>{redstate}</div>
      <div>
        <button onClick={()=> dispatch({type: "increment", payload: 1})}>Increment</button> {/*calling the dispatch method requires an action object be passed*/ }
        <button onClick={() => dispatch({type: "decrement", payload: 1})}>Decrement</button>
      </div>  
    </div>
    
  )
}

export default App
