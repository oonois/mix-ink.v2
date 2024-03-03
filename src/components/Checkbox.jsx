
export default function Checkbox({checkColors,slots, setSlots,colorhexPack,setcheckmate,count, setCount, misatge, setMisatge,}) {
  return (
    <div className="flex flex-col justify-center w-full p-5 text-white">
      <p className="text-center">Intentos restantes: {count}</p>
      <button 
      onClick={()=>checkColors(slots,setSlots,colorhexPack,setcheckmate,count,setCount,setMisatge)}
      className="bg-slate-300">Comprobar</button>
      <p className="text-center">.{misatge}.</p>
    </div>
  )
}
