import { useState } from "react";
import Slot from "./Slot";

export default function Slots({slots, bg60,bg25,bg15,check}){
  
  const [border,setBorder] = useState(['','',''])
  let prevborder = border
  let i = 0
  for(let x of check){
    if(x != null && x.encaixa === false){
      prevborder[x.posicio-1] = 'yellow'
    }else if(x != null && x.encaixa === true){
      prevborder[x.posicio-1] = 'green' 
    }else if(x === null){
      console.log('canario')
      prevborder[i] = 'red'
    }
    i++  
  }
  return (
    <div className="flex justify-center gap-3">
      <Slot 
        border={border[0]}
        slots = {slots[1]}
        bg = {bg60}
        titol={'60%'}
      />
      <Slot 
        border={border[1]}
        slots = {slots[2]}
        bg = {bg25}
        titol={'25%'}
      />
      <Slot
        border={border[2]}
        slots = {slots[3]}
        bg = {bg15}
        titol={'15%'}
      /> 
    </div>
  )
}
