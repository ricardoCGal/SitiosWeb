window.onload = function(){
    usuario ="";
    passwd = "";
    email = "";
    txtN = document.getElementById('nombreR');
    txtP = document.getElementById('passwdR');
    txtE = document.getElementById('emailR');
    listaN = []
    listaE = []
    listaP = []
}

function registrar(){
    usuario = txtN.value;
    passwd = txtP.value;
    email = txtE.value;
    window.alert("Bienvenido\n\n"+"Usuario: "+usuario+"\nPass: "+passwd+"\nEmail: "+email);
    listaN.push(usuario)
    listaE.push(email)
    listaP.push(passwd)
}

function ver(){
    ix= 0;
    for (item in listaN){
        console.log("Nom:  "+listaN[ix]+"\nEm:  "+listaE[ix]+" \nPass:  "+listaP[ix]);
        ix+=1;
    } 
}


function verificar() {
    var verUsuario = document.getElementById('nombreL').value; // le damos una nueva variable al usuario 
    var verPass = document.getElementById('passwdL').value;     //y pass de acceso

    var localizarUsuario = listaN.indexOf(verUsuario);    //localizamos el usuario en la lista 
    if (localizarUsuario !== -1 && listaP[localizarUsuario] === verPass) {  //y se verifican que coincida el usuario y el pass
        window.alert("Usuario encontrado. ¡Bienvenido, " + verUsuario + "!, ahora tienes acceso a la pagina");
    } else {
        window.alert("Error!!!. El usuario y contraseña no coinciden con el registro.");
    }
}