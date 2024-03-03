import Color from "./Color";

export default function Paleta({colorhexPack, handleSlots2,setSlots,slots,setbg60,setbg25,setbg15}) {
  
  return (
    <div className="flex justify-center gap-2 pt-5">
      {colorhexPack.map((color)=>{
        return (
          <Color 
           color = {color}
           handleSlots2 = {handleSlots2}
           slots = {slots}
           setSlots={setSlots}
           setbg60 = {setbg60}
           setbg25 = {setbg25}
           setbg15 = {setbg15}
          />
        )
      })}
    </div>
  )
}
