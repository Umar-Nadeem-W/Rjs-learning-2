import { useEffect, useReducer, useState , useRef} from 'react'


function App() {
    
    const [danger, setDanger] = useState(false)
    const [amount, setAmount] = useState(0) 
    const [breach, setBreach] = useState(false)
    const tries = useRef(0);
    
    const [enteredPin, setEnteredPin] = useState(0);

    const [account, dispatch]= useReducer(reducer,{amount:0, pin: 1234, access: false})
    function reducer(account, action){
      if(action.type == "GrantAccess"){return{...account, access: true}}
     if(action.type == "Deposit"){return{...account, amount: account.amount+ amount}}
      else if(action.type == "Withdraw"){return{...account, amount: account.amount- amount}}
    }
    function verifyPin(pin){
      
      if (pin == account.pin) {tries.current =0; dispatch({type:"GrantAccess"})}
      else if(pin != account.pin && tries.current <3){tries.current++}
      else if(pin != account.pin && tries.current >= 3){setBreach(true)}

    }
   
    useEffect(() => {
      if (breach){setDanger(true)}; //If condiotion is iportant because useEffect runs on initial render
    }, [breach]);


    if(danger == true){return(<div>Access denied</div>)}

    else if(account.access == false && danger == false){
      return(<div>
        <input type="password" placeholder='Enter your pin' onChange={(e)=> setEnteredPin(Number(e.target.value))}/>
        <button onClick={()=>verifyPin(enteredPin)} >Verify</button>
      </div>)
    }
    else if (account.access == true){
      return     (<div>
      <div>{account.amount}</div>

      <input type="text" value={amount} onChange={(e)=>setAmount(Number(e.target.value))}/>
      <button onClick={()=>dispatch({type:"Deposit", payload: {amount}})}>Deposit</button>
      <button onClick={ ()=>dispatch({type:"Withdraw", payload: {amount}})}>Withdraw</button>
      </div>);}


    
    // else return (
  
      
    // )
  
      
  }
  //check for github


  

export default App
