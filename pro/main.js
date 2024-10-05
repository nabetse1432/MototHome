var msj="", msj1="";

function datos(){
    var nom,tel,ema,ape;
    nom=document.getElementById("nombre").value;
    ape=document.getElementById("ape").value;
    tel=document.getElementById("tel").value;
    ema=document.getElementById("email").value;
    
    //validacion nombre 
    if(nom==""){
        alert("rellena el nombre");
    }
    if(nom.length > 40){
        alert("Dato muy grande");
    }
    var nomexp = /^[a-zA-Záéíóú\s]+$/;//expresion regular, que acepta valores de la a la z en mayusculas y minusculas, sin numeros
     if(!nomexp.test(nom)){
      alert("Escribir solo letras");
      return false;

     }
    //Validacion apellidos 
    if(ape==""){
        alert("rellena el campo apellidos");
    }
    if(ape.length > 40){
        alert("Dato muy grande");
    }
    var apexp = /^[a-zA-Záéíóú\s]+$/;//expresion regular, que acepta valores de la a la z en mayusculas y minusculas, sin numeros
     if(!apexp.test(ape)){
      alert("Escribir solo letras");
      return false;
     }
  
    //validacion telefono
    if(tel==""){
        alert("Rellena el Campo Telefono");
    }
    if(tel.length > 10){
        alert("numero muy largo");
    }

    //validacion email
    validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/;
    if(ema==""){
        alert("Rellena el campo email");
    }
    if(!validEmail.test(ema)){
        alert("Correo invalido");
    }

    msj+="Nombre: " + nom + "\n" +
    ape + "\n" +
    "Telefono: " + tel + "\n" +
    "E-mail: " + ema + "\n" ;
    document.getElementById("datp").value = msj;
}

function operaciones(){
    const form=document.createElement("form");
    const elepadre=document.getElementById('forma');
    form.id="opr";
    form.innerHTML= `
    <label for="input1">Fuerza</label>
    <input type="text" id="fu"><br>

    <label for="input2">Deformacion</label>
    <input type="text" id="defo"><br>

    <label for="input3">Elasticidad</label>
    <input type="text" id="ela" readonly="true"><br>

    <input type="button" id="eva" value="Evaluar" onclick="evaluar();"> 
        `;
   const form1=document.createElement("form");
   form1.id = "opre";
   form1.innerHTML= `<label>Fuerza</label>
                    <input type="number" min="0" id="fue">
                    <label>Longitud</label>
                    <input type="number" min="0" id="lon">
                    <label>Radio</label>
                    <input type="number" min="0" id="ra">
                    <label>Area</label>
                    <input type="text" min="0" id="ar" readonly="true">
                    <textarea id=res ></textarea>
                    <input type="button" id="eva1" value="Evaluar" onclick="evaluar1();">`;
    switch(document.getElementById('opera').value){
        case "op1":
        elepadre.appendChild(form);
        alert("Un resorte de 10cm de long. se alarga a 10.7cm cuando actúa sobre él una fuerza de 120N. Cual es el valor de su constante elástica?");
        break;
        case "op2":
        elepadre.appendChild(form1);
        alert("A una vara de cobre de 3m de longitud y 0.4cm de radio se le aplica una fuerza de 300N\n Calcular su deformacion lineal");
        break;
        default:
        alert("Operacion no programada");
    }
}

function evaluar(){
    var f,x,res,k;
    f=document.getElementById('fu').value;
    x=document.getElementById('defo').value;
    res=f/x;
    document.getElementById('ela').value = res;
}

function evaluar1(){
    var f1,lo,r,area,res1,ope;
    const Y=110000000000;
    f1=document.getElementById('fue').value;
    lo=document.getElementById('lon').value;
    r=document.getElementById('ra').value;
    area=Math.PI*Math.pow(r,2);
    document.getElementById('ar').value=area;
    ope=(f1*lo)/(area*Y);
    document.getElementById('res').value = ope;
}
var contador=0;
var contador2=0;
var contador3=0;
var contador4=0;
var contador5=0;
function yr6(){
    var presionado=true;
    while(presionado){
        contador++;
        document.getElementById('contador').textContent = contador;
        presionado=false;
    }
}
function h2(){
    var presionado=true;
    while(presionado){
        contador2++;
        document.getElementById('contador2').textContent = contador2;
        presionado=false;
    }
}
function duca(){
    var presionado=true;
    while(presionado){
        contador3++;
        document.getElementById('contador3').textContent = contador3;
        presionado=false;
    }
}
function cb(){
    var presionado=true;
    while(presionado){
        contador4++;
        document.getElementById('contador4').textContent = contador4;
        presionado=false;
    }
}
function bm(){ 
    var presionado=true;
    while(presionado){
        contador5++;
        document.getElementById('contador5').textContent = contador5;
        presionado=false;
    }
}

