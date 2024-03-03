
export default function Screen(color) {
  console.log(color.therealcolor)
  return (
    <div
          style={{ 
            backgroundColor: color.therealcolor
          }}
          className={`w-44 md:w-56 h-24 md:h-44 rounded-lg border border-zinc-700`}
        ></div>
  )
}