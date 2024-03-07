
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

export function handleSlots2(color,slots,setSlots,setbg60,setbg25,setbg15) {
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

export function checkcolors(slots,colors,count,setCount,setcheckmate,setcheck,check){
  let color1 = colors[0]
  let color2 = colors[1]
  let color3 = colors[2]
  let voltes = [1,2,3]
  let slotsdev = []
  let prevslots = slots
  
  for(let box of voltes){
    if(slots[box] === color1 || slots[box] === color2 || slots[box] === color3){
      if(slots[box] === colors[box-1]){
        slotsdev.push({
          posicio: box,
          box:colors[box],
          encaixa: true
        })
        
      }else{
        slotsdev.push({
          posicio: box,
          box:colors[box],
          encaixa: false
        })
        prevslots.splice(box,1,null)
      }
      }else{
        slotsdev.push(null)
        prevslots.splice(box,1,null)
      }

    }
    
    let prevcount = count
    setCount(prevcount-1) 
    setcheck(slotsdev)
    if (slots[1] === color1 && slots[2] === color2 && slots[3] === color3){
      setcheckmate(true)
      console.log('check')
    }
    
  }

export function checkColors(slots, colors,setcheckmate,setSlots,count,setCount,setMisatge){
  let color1 = colors[0]
  let color2 = colors[1]
  let color3 = colors[2]
  if (slots[1] === color1 && slots[2] === color2 && slots[3] === color3){
    setcheckmate(true)
    console.log('check')
  }else if(slots[1] === color1 && slots[2] === color2){
    setMisatge('60% i 25%')
    const prevSlots = slots
    let x = sumarColores(colorPack,0,1) 
    prevSlots[0] = convertRGBtoHex(x.red, x.green, x.blue)
    setSlots([prevSlots[0],prevSlots[1],prevSlots[2],null])
    
  }else if(slots[2] === color2 && slots[3] === color3) {
    setMisatge('25% i 15%')
    const prevSlots = slots
    let x = sumarColores(colorPack,1,2) 
    prevSlots[0] = convertRGBtoHex(x.red, x.green, x.blue)
    setSlots([prevSlots[0],null,prevSlots[2],prevSlots[3]])
    
  }else if (slots[1] === color1 && slots[3] === color3) {
    setMisatge('60% i 15%')
    const prevSlots = slots
    let x = sumarColores(colorPack,0,2) 
    prevSlots[0] = convertRGBtoHex(x.red, x.green, x.blue)
    setSlots([prevSlots[0],prevSlots[1],null,prevSlots[3]])
  }else if(slots[1]=== color1) {
    setMisatge('60%')
    const prevSlots = slots
    setSlots([prevSlots[0],prevSlots[1],null,null])
    if(slots[2]===color3 || slots[3]===color2){
      if(slots[2]===color3 && slots[3]===color2){
        setMisatge('60% correcto, 25% y 15% porcentajes erroneos')
      }else if(slots[2]===color3){
        setMisatge('60% bien, 25% porcentaje erroneo')
      }else {
        setMisatge('60% bien, 15% porcentaje erroneo')
      }
    }
  }else if(slots[2]=== color2){
    setMisatge('25%')
    const prevSlots = slots
    setSlots([prevSlots[0],null,prevSlots[2],null])
    if(slots[1]===color3 || slots[3]===color1){
      if(slots[1]===color3 && slots[3]===color1){
        setMisatge('25% correcto, 60% y 15% porcentajes erroneos')
      }else if(slots[1]===color3){
        setMisatge('25% bien, 60% porcentaje erroneo')
      }else {
        setMisatge('25% bien, 15% porcentaje erroneo')
      }
    }
  }else if(slots[3]=== color3){
    setMisatge('15%')
    const prevSlots = slots
    setSlots([prevSlots[0],null,null,prevSlots[3]])
    if(slots[1]===color2 || slots[2]===color1){
      if(slots[1]===color2 && slots[2]===color1){
        setMisatge('15% correcto, 60% y 25% porcentajes erroneos')
      }else if(slots[1]===color2){
        setMisatge('15% bien, 25% porcentaje erroneo')
      }else {
        setMisatge('15% bien, 60% porcentaje erroneo')
      }
    }
  }else if(slots[1]===color2 || slots[1] === color3) {
    const prevSlots = slots
    setSlots([prevSlots[0],null,null,null])
    setMisatge('60% wrong hole')
  }else if(slots[2]===color1 || slots[2] === color3){
    const prevSlots = slots
    setSlots([prevSlots[0],null,null,null])
    setMisatge('25% wrong hole')
  }else if(slots[3]===color1 || slots[3] === color2){
    const prevSlots = slots
    setSlots([prevSlots[0],null,null,null])
    setMisatge('15% wrong hole')
  }else{
    const prevSlots = slots
    setSlots([prevSlots[0],null,null,null])
  }
  let prevcount = count
  setCount(prevcount-1)   
 }

 export function refreshPage() {
    
  window.location.reload(false);
}