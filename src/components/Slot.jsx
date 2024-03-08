
export default function Slot({slots,bg,border,titol}){
  console.log(border)
  return (
    <>
      <div>
        <p 
          style={{ 
            backgroundColor: bg,
            border: 'solid 2px',
            borderColor: border   
          }}
          className="text-center rounded-md mb-2 text-white">
          {titol}
        </p>
        <div
          style={{ 
            backgroundColor: slots     
          }}
          className={`w-20 md:w-32 h-20 md:h-32  border border-zinc-700 rounded-lg`}>
        </div>
      </div>  
    </>
  )
}
