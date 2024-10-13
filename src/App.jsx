import { useReducer, useState } from 'react'


function App() {
  const [redstate, dispatch] = useReducer(reducer,{count: 0, incrementvalue:  1}) //first argument is a function and second argument is default state value in te useReducer hook
  function reducer(redstate, action){ // in the reducer function, first argument is the sate, second the action object
      if(action.type=="increment"){return {...redstate, count: redstate.count + redstate.incrementvalue } }
      else if(action.type == "decrement"){return {...redstate, count: redstate.count - redstate.incrementvalue }}
      else if(action.type == "setIncrement"){return {...redstate, incrementvalue: action.payload }}
      
  }
  //check for github


  return (
    <div>
      <div>{redstate.count}</div>
      <div>
        <input type="text" value={redstate.incrementvalue} placeholder='Set increment' onChange={(e)=> dispatch({type:"setIncrement" , payload: Number(e.target.value)})} />
        <button onClick={()=> dispatch({type: "increment", payload: 1})}>Increment</button> {/*calling the dispatch method requires an action object be passed*/ }
        <button onClick={() => dispatch({type: "decrement", payload: 1})}>Decrement</button>
      </div>  
    </div>
    
  )
}

export default App
