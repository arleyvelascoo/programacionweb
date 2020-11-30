document.addEventListener("DOMContentLoaded", function() {
    var no = document.getElementById('gridRadios2');
    no.checked = true;
    var yes = document.getElementById('gridRadios1');
    yes.checked = false;
    var gustoform = document.getElementById('gustos');
    no.addEventListener('click', function(){
        gustoform.innerHTML = '';
    });
    yes.addEventListener('click', () => {
        gustoform.innerHTML = '<div class="form-row"><div class="form-group col-md-6">' +
            '<label for="inputAddress">Color Favorito</label>' +
            '<input type="color" class="form-control" id="colorfavorite"></div><div class="form-group col-md-6">' +
            '<label for="inputPassword4">Marca de Carro Favorita</label><input type="text" class="form-control" id="marcafavorita">' +
            '</div></div><div class="form-row"><div class="form-group col-md-6"><label for="inputAddress">Estilo de Carro Favorito</label>' +
            '<input type="text" class="form-control" id="style"></div><div class="form-group col-md-6"><label for="inputPassword4">Modelo del carro que más le gusta</label>' +
            '<input type="text" class="form-control" id="model"></div></div>' +
            '<iframe src="slider.html"></iframe>';



    });

});

document.getElementById("formulario").addEventListener('submit', validarFormulario);


function validarFormulario(evento) {

    function validarLongitud(campo, minlength, maxlength) {
        if (campo.length >= minlength && campo.length <= maxlength) {
            return true;
        } else {
            return false;
        }
    }

    function validarUsuario(campo){
        charextrains = [" “ " , " ” " , " • " , " – " , " — " , " ˜ " , " ™ " , " š " , " › " , " œ " , " ž " , " Ÿ " , " Œ " , " ¡ " , " ¢ " , " £ " , " ¤ " , " ¥ " , " ¦ " , " § " , " ¨ " , " © " , " ª " , "@", "#"," « " , " ¬ " , " ­ " , " ® " , " ~ " , " Δ " , " € " , " ‚ " , " ƒ " , " „ " , " … " , " † " , " ‡ " , " ˆ " , " ‰ " , " Š " , " ‹ " , " ¯ " , " ° " , " ± " , " ² " , " ³ " , " ´ " , " µ " , " ¶ " , " · " , " ¸ " , " ¹ " , " º " , " » " , " ¼ " , " ½ " , " ¾ " , " ¿ " , " À " , " Á " , " Â " , " Ã " , " Ä " , " Å " , " Æ " , " Ç " , " È " , " É " , " Ê "];
        var com = true;
        charextrains.forEach(element => {
            element=element.trim()
            if (campo.includes(element)) {
                com = false;
                return;
            }
        })
        return(validarLongitud(campo, 10, 20)&&com);
    }

    function validarEmail(campo) {
        var com = true;
        if(!campo.includes('@')) {
            com = false;
        }
        return(validarLongitud(campo, 6, 120)&&com);
    }

    function validarPassword(campo) {
        var com = true;
        if (campo == campo.toLowerCase()) {
            com = false;
        }
        const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
        var num = false;
        numbers.forEach(elemento => {
            if (campo.includes(elemento)) {
                num = true;
            }
        })
        var letter = false;
        const letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
        letras.forEach(elemento => {
            if (campo.includes(elemento)) {
                letter = true;
            }
        })
        return(validarLongitud(campo, 15, 20) && /^[0-9A-Za-z/#%&]+$/.test(campo) && num && com && letter);
    }

    function validarDireccion(campo){
        var com=false;
        validos=['cll', 'cra', 'av', 'anv', 'trans']
        validos.forEach(element => {
            if (campo.toLowerCase().startsWith(element.toLowerCase())) {
                com = true;
            }
        })
        return com;
    }

    evento.preventDefault();
    var alerta = document.getElementById('alerta');
    var message;
    var firstName = document.getElementById('inputFirstname').value;
    if(!validarLongitud(firstName, 1, 25)) {
        message = "El nombre no es valido, debe tener minimo 1 carater y maximo 25";
        alerta.innerHTML = '<div class="alert alert-danger alert-dismissible fade show" role="alert"> <strong>Atención! </strong> '+message +'<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span></button> </div>';
        window.scroll(0, 0);
        return;
    }
    var lastName = document.getElementById('inputLastName').value;
    if (!validarLongitud(lastName, 1, 25)) {
        message = "El apellido no es valido, debe tener minimo 1 carater y maximo 25";
        alerta.innerHTML = '<div class="alert alert-danger alert-dismissible fade show" role="alert"> <strong>Atención! </strong> '+message +'<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span></button> </div>';
        window.scroll(0, 0);
        return;
    }
    var user = document.getElementById('inputUser').value;
    if (!validarUsuario(user)) {
        message = "El usuario no debe contener caracteres raros, debe tener mínimo 10 caracteres y máximo 20";
        alerta.innerHTML = '<div class="alert alert-danger alert-dismissible fade show" role="alert"> <strong>Atención! </strong> '+message +'<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span></button> </div>';
        window.scroll(0, 0);
        return;
    }
    var email = document.getElementById('inputEmail4').value;
    if (!validarEmail(email)) {
        message = "No es una dirección de correo valida";
        alerta.innerHTML = '<div class="alert alert-danger alert-dismissible fade show" role="alert"> <strong>Atención! </strong> '+message +'<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span></button> </div>';
        window.scroll(0, 0);
        return;
    }

    var password = document.getElementById('inputPassword4').value;
    if (!validarPassword(password)) {
        message = "Verifica que hayas ingresado un password correcto";
        alerta.innerHTML = '<div class="alert alert-danger alert-dismissible fade show" role="alert"> <strong>Atención! </strong> '+message +'<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span></button> </div>';
        window.scroll(0, 0);
        return;
    }

    var confirmpassword = document.getElementById('inputPassword5').value;
    if (password!=confirmpassword){
        message = "Las contraseñas no coinciden";
        alerta.innerHTML = '<div class="alert alert-danger alert-dismissible fade show" role="alert"> <strong>Atención! </strong> '+message +'<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span></button> </div>';
        window.scroll(0, 0);
        return;
    }

    var direccion = document.getElementById('inputAddress').value;
    if (!validarDireccion(direccion)){
        message = "La dirección debe empezar por Av/Cll/Cra/Anv/Trans";
        alerta.innerHTML = '<div class="alert alert-danger alert-dismissible fade show" role="alert"> <strong>Atención! </strong> '+message +'<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span></button> </div>';
        window.scroll(0, 0);
        return;
    }
    this.submit();
}
