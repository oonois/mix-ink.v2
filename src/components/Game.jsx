import NewGame from "./NewGame"
import Screens from "./Screens"
import Checkbox from "./Checkbox"
import Paleta from "./Paleta"
import { useState } from "react"
import {handleColorPack, createnewColor, sethexcolors, handleSlots2, checkColors} from './Setnewgame'

export default function Game(){
  
  const [baraja, setbaraja] = useState([0,1,2,3,4,5,6])
  const [count, setCount] = useState(10)
  const [slots, setSlots] = useState([null,null,null,null])
  const [bg60, setbg60] = useState('#242424')
  const [bg25, setbg25] = useState('#242424')
  const [bg15, setbg15] = useState('#242424')
  const [colorPack, setColorPack] = useState([])
  const [colorhexPack, setColorHexPack] = useState([])
  const [thecolor, setThecolor] = useState([])
  const [checkmate, setcheckmate] = useState(false)
  const [misatge, setMisatge] = useState('')

  function shuffle(input){
    input.sort(() => Math.random() - 0.5);
  }
  
  if(colorPack.length === 0){
    let test = handleColorPack()
    setColorPack(test)
    let hextest = sethexcolors(test)
    const prevbaraja = baraja
    shuffle(prevbaraja)
    setbaraja(prevbaraja)
    console.log(prevbaraja)
    setColorHexPack(hextest)
    console.log(hextest)
    setThecolor(createnewColor(test))
    setSlots([null,null,null,null]) 
    setMisatge('')
    setcheckmate(false)
    setCount(10)
    //console.log(colorPack)
  }
  
  return (
    <div className="flex flex-col  justify-center">
      <NewGame />
      
      <Screens 
        colorhexPack = {colorhexPack}
        thecolor = {thecolor}
        checkmate = {checkmate}
      />
      <Checkbox  
        slots = {slots}
        setSlots = {setSlots}
        count = {count}
        setCount = {setCount}
        colorhexPack={colorhexPack}
        setcheckmate = {setcheckmate}
        misatge = {misatge}
        bg60 = {bg60}
        bg25 = {bg25}
        bg15 = {bg15}
      />
      //he creat una bajara random i sha denviar al component per desordenar els botons sense que afecti la logica del joc
      <Paleta 
        colorhexPack = {colorhexPack}
        handleSlots2 = {handleSlots2}
        slots ={slots}
        setSlots = {setSlots}
        setbg60 = {setbg60}
        setbg25 = {setbg25}
        setbg15 = {setbg15}  
      />
    </div>
  )
}
