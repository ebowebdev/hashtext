const texthandler = {
  codertext(message){
    let msg = "";
    let num = 4;
    for(let i=0; i<message.length; i++){
      msg += String.fromCharCode(message.charCodeAt(i)*num)
    }
    return msg
  },
  decodertext(message){
    let msg = "";
    let num = 4;
    for(let i=0; i<message.length; i++){
      msg += String.fromCharCode(message.charCodeAt(i)/num)
    }
    return msg
  }
}

const coder = function(message){
  return texthandler.codertext(message)
}
const decoder = function(message){
  return texthandler.decodertext(message)
}

export {
  coder,
  decoder
}