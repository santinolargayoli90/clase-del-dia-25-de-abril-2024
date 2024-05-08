let = prompt ("Ingrese su nombre")
let = prompt ("ingrese su contraseña")
let UsuarioNombre = "Martin"
let ContraseñaNombre = "cJHoht3!"
if ((UsuarioNombre== "martin") && (ContraseñaNombre == "cJhoht3!")) {
    alert ("Hola podes entrar")
} else {
    alert ("no podes entrar")
}

//Actividad 2 

let notaexamen = 8
let notatrabajospracticos = 6 
let asistencia = true

if ((notaexamen >= 8 ) && (notatrabajospracticos >=6) && (asistencia ==true)) {
    alert ("estas aprobado")
} else {
   alert ("estas desaprobado") 
}

//actividad 3

let basura = prompt ("ingresa tipo de residuo")
let humedos = "sacar el lunes, miercoles y viernes"
let secos = "sacar basura martes y jueves"
let otrotipo = "no sacar residuos"

if ((basura == "humedos") || (basura == "secos") || (basura == "otro tipo")) {
    alert = humedos
alert = secos
} else {
   alert = otrotipo 
}