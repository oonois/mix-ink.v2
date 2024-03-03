import Screen from "./Screen"
import {convertRGBtoHex} from './Setnewgame'

export default function Screens({thecolor}) {
  console.log(thecolor)
  let realcolor = thecolor
  const therealcolor = convertRGBtoHex(realcolor.red, realcolor.green,realcolor.blue)
  
  return (

    <div className="flex justify-center pt-5 gap-2">
      <Screen />
      <Screen 
        therealcolor = {therealcolor}
      />
    </div>
  )
}
