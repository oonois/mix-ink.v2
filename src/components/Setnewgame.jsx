
export function handleColorPack(){
  let v = 7
  const packcolor = []
  for(let i=0; i <v; i++){
    
    packcolor.push(randomRGB())
  } 
  //setColorPack(packcolor)
  //setThecolor(createnewColor(packcolor))
  return packcolor 
}

export function handleSlots2(color,slots,setSlots) {
  if(slots[1] === null){
    const prevSlots = slots
    setSlots([prevSlots[0],color,prevSlots[2], prevSlots[3]])
    setbg60(color)
  }else if (slots[2] === null){
    const prevSlots = slots
    setSlots([prevSlots[0],prevSlots[1],color , prevSlots[3]])
    setbg25(color)
  } else if (slots[3] === null){
    const prevSlots = slots
    setSlots([prevSlots[0],prevSlots[1], prevSlots[2], color])
    setbg15(color)
  }   
}

export function handleSlots(color) {
  if(mirror60 === null){
    const prevSlots = slots
    setSlots([prevSlots[0],color,prevSlots[2], prevSlots[3]])
    setbg60(color)
  }else if (mirror25 === null){
    const prevSlots = slots
    setSlots([prevSlots[0],prevSlots[1],color , prevSlots[3]])
    setbg25(color)
  } else if (mirror15 === null){
    const prevSlots = slots
    setSlots([prevSlots[0],prevSlots[1], prevSlots[2], color])
    setbg15(color)
  }   
}


export function createnewColor(color){
  
  let redfinal = Math.round(((color[0].red*60)/100)+((color[1].red*25)/100)+((color[2].red*15)/100));
  let greenfinal = Math.round(((color[0].green*60)/100)+((color[1].green*25)/100)+((color[2].green*15)/100));
  let bluefinal = Math.round(((color[0].blue*60)/100)+((color[1].blue*25)/100)+((color[2].blue*15)/100));
  
  //  const rgbresult = {
  //   red: redfinal,
  //   green: greenfinal,
  //   blue: bluefinal
  // }
  
  // const prevbaraja = baraja
  // shuffle(prevbaraja)
  // setbaraja(prevbaraja)
  return {
      red: redfinal,
      green: greenfinal,
      blue: bluefinal
    }
}

export function sethexcolors(colors){
  let sethex=[]
  for(let color of colors){
    sethex.push(convertRGBtoHex(color.red,color.green,color.blue))
  }
  return sethex
}


export function colorToHex(color){
  const hexadecimal = color.toString(16);
  return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
}

export function convertRGBtoHex(r,g,b){
  return "#" + colorToHex(r) + colorToHex(g) + colorToHex(b);
}

export function sumarColores(color, a, b) {
  let redfinal = Math.round((color[a].red + color[b].red)/2)
  let greenfinal = Math.round((color[a].green + color[b].green)/2)
  let bluefinal = Math.round((color[a].blue + color[b].blue)/2)
  const rgbresult = {
    red: redfinal,
    green: greenfinal,
    blue: bluefinal
  }
  return rgbresult
}


export function randomRGB(){
  let newred = Math.floor(Math.random() * 256)
  let newgreen = Math.floor(Math.random() * 256)
  let newblue = Math.floor(Math.random() * 256)
  const newRGB = {
    red: newred,
    green: newgreen,
    blue: newblue
  }
  return newRGB
}

export function shuffle(input) {
  input.sort(() => Math.random() - 0.5);
}
