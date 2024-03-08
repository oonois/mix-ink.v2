import { refreshPage } from "./Setnewgame"
export default function NewGame(){
  return (
    <>
      <button 
        onClick={()=> refreshPage()}
        className="text-2xl text-white">NewGame
      </button>
    </>
  )
}
