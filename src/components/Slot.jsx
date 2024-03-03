
export default function Slot({slots,bg}) {
  console.log(slots)
  return (
    <>
      <div>
          <p 
            style={{ 
              backgroundColor: bg
            }}
          className="text-center rounded-md mb-2 text-white">60%</p>
          <div
            
             style={{ backgroundColor: slots }}

            className={`w-20 md:w-32 h-20 md:h-32  border border-zinc-700 rounded-lg`}>
          </div>
        </div>  

    </>
  )
}
