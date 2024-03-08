export default function Color({color, handleSlots2,slots,setSlots,setbg60,setbg25,setbg15}){
  
  return (
    <button
      onClick={() => handleSlots2(color,slots,setSlots,setbg60,     setbg25,setbg15)}
      style={{ backgroundColor: color }}
      className={`w-10 md:w-14 h-10 md:h-14 border border-zinc-700 rounded-lg `}
    ></button>
  )
}
