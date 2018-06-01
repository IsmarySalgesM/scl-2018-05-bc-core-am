window.cipher = {
//Parametros a evaluar //
    encode: (string,offset) => {
      let intro = "";
// Recorriendo el textarea //
    for (let i = 0; i < string.length; i++){
      let upperstr = string.toUpperCase(i);
      let out  = (upperstr.charCodeAt(i) - 65 + parseInt(offset)) % 26 + 65;
      intro += String.fromCharCode(out);
}     return intro;
},
   decode: (string,offset) => {
      let exit = "";
// Recorriendo el textarea //
    for (let i = 0; i < string.length; i++){
      let upperstr = string.toUpperCase(i);
      let out= (upperstr.charCodeAt(i) + 65 - parseInt(offset)) % 26 + 65;
      exit += String.fromCharCode(out); 
      return exit;
}
}
  
    }
  
  
  