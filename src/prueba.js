window.onload = () => {
    /*Evento del primer click cifrar */
    const  btn = document.getElementById("btn_cifrar");
    
    btn.addEventListener("click",  () => {
    /* Evalacion del boton desplazamiento */
    let offset = document.getElementById("desplazamiento").value; 
    /* Evaluacion de textarea */
    let string = document.getElementsByTagName("textarea")[0].value;
    /* Conexion de cipher e index */
    let conx = window.cipher.encode(string,offset);
      document.getElementsByTagName("textarea")[1].innerHTML = conx;
    })
         // CAMBIAR LAS VARIABLES POR CONST // !!     
    /*Evento del primer click descifrar */
    const  btnDos = document.getElementById("btnDos").addEventListener("click", () => { 
      /* Evaluacion del boton desplazamiento */
    let offset = document.getElementById("number").value; 
    /* Evaluacion de textarea */
    let string = document.getElementsByTagName("textarea")[0].value;
    /* Conexion de cipher e index */
    let conx = window.cipher.decode(string,offset);
      document.getElementsByTagName("textarea")[1].innerHTML = conx;
    })}
    