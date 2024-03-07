import { useState } from "react"
import { checkcolors } from "./Setnewgame"
import Slots from "./Slots"


export default function Checkbox({slots,colorhexPack,count, setCount, bg15, bg25, bg60, setcheckmate}) {

  const [check, setcheck] = useState([null,null,null])
  
  
  for(let x of check){
    if(x != null && x.encaixa === false){
      console.log('wee')
    }
  }
    
  return (
    <div className="flex flex-col justify-center w-full p-5 text-white">
      <p className="text-center">Intentos restantes: {count}</p>
      <button 
      onClick={()=>checkcolors(slots,colorhexPack,count,setCount,setcheckmate,setcheck,check)}
      className="bg-slate-300 m-5">Comprobar</button>
      <p className="text-center">{}</p>
      
      <Slots 
      slots = {slots}
      bg60 = {bg60}
      bg25 = {bg25}
      bg15 = {bg15}
      check = {check}
       />
       
    </div>
  )
}

