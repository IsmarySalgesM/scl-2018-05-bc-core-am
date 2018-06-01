window.onload = () => {
  /*Evento del primer click cifrar */
  const  btn = document.getElementById("btn_cifrar");
    btn.addEventListener("click",  () => {
  /* Evalacion del boton desplazamiento */
  let desplaz = document.getElementById("desplazamiento").value; 
  /* Evaluacion de textarea */
  let str = document.getElementById("msje_cifrar").value;
  /* Conexion de cipher e index */
  const conx = window.cipher.encode(str,desplaz);
    document.getElementById("msj_descifrar").innerHTML = conx
  })
       // CAMBIAR LAS VARIABLES POR CONST // !!     
  /*Evento del primer click descifrar */
  const  btnDos = document.getElementById("btn_descifrar");
    btnDos.addEventListener("click",  () => {
  /* Evalacion del boton desplazamiento */
  let desplazDos = document.getElementById("desplazamiento").value; 
  /* Evaluacion de textarea */
  let strDos = document.getElementById("msje_cifrar").value;
  /* Conexion de cipher e index */
  const conxDos = window.cipher.encode(strDos,desplazDos);
    document.getElementById("msj_descifrar").innerHTML = conxDos
  })}