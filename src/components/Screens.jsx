import Screen from "./Screen"
import {convertRGBtoHex, refreshPage} from './Setnewgame'

export default function Screens({thecolor,colorhexPack, checkmate}) {
  
  let realcolor = thecolor
  const therealcolor = convertRGBtoHex(realcolor.red, realcolor.green,realcolor.blue)
  
  return (
    <>
    {checkmate === true ? 
      <div
        style={{backgroundColor: therealcolor}}
        className={`absolute w-screen h-screen `}
      >
        <div
        className="flex justify-center p-10"
        >
        <button
        className="text-4xl text-white"
        onClick={()=> refreshPage()}
        >New Game</button>
        </div>
        
        </div> : ''}
    <div className="pt-5 gap-2">
      <div className="flex justify-center opacity-0 hover:opacity-100 ">
          <div
            
            style={{ backgroundColor: colorhexPack[0] }}
            className={`w-10 md:w-14 h-10 md:h-14  border border-zinc-700 rounded-lg  `}>
          </div>
          <div
            
            style={{ backgroundColor: colorhexPack[1] }}
            className={`w-10 md:w-14 h-10 md:h-14  border border-zinc-700 rounded-lg  `}>
          </div>
          <div
            
            style={{ backgroundColor: colorhexPack[2] }}
            className={`w-10 md:w-14 h-10 md:h-14  border border-zinc-700 rounded-lg  `}>
          </div>
          </div>
      <div className="flex justify-center gap-2 pt-3">

      <Screen />
      <Screen 
        therealcolor = {therealcolor}
      />
      </div>
    </div>
    </>
  )
}
