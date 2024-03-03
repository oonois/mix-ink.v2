import Slot from "./Slot";

export default function Slots({slots, bg60,bg25,bg15}) {
  
  console.log(slots)
  
  return (
    <div className="flex justify-center gap-3">
      <Slot 
      slots = {slots[1]}
      bg = {bg60}
      />
      <Slot 
      slots = {slots[2]}
      bg = {bg25}
      />
      <Slot
      slots = {slots[3]}
      bg = {bg15}
      />
      
    </div>
  )
}
