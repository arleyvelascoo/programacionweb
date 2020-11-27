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
            '<label for="Precio">Rango de precio vehiculo</label>' +
            '<div id=\'id66\' class="range" style="margin: 30px">\n' +
            '  <div id=\'id66b\' class=\'range__between\'></div>\n' +
            '    <button id=\'id661\' class="range__button_1"></button>\n' +
            '    <button id=\'id662\' class="range__button_2"></button>\n' +
            '    <input id=\'id66i1\' class=\'range_inpt1\' type=\'number\' min=\'5000000\' max=\'300000000\'>\n' +
            '    <input id=\'id66i2\' class=\'range_inpt2\' type=\'number\' min=\'5000000\' max=\'300000000\'">\n' +
            '</div>';

        setTimeout(init2slider('id66', 'id66b', 'id661', 'id662', 'id66i1', 'id66i2'), 0);

        function init2slider(idX, btwX, btn1X, btn2X, input1, input2) {
            var slider = document.getElementById(idX);
            var between = document.getElementById(btwX);
            var button1 = document.getElementById(btn1X);
            var button2 = document.getElementById(btn2X);
            var inpt1 = document.getElementById(input1);
            var inpt2 = document.getElementById(input2);

            var min=inpt1.min;
            var max=inpt1.max;

            /*init*/
            var sliderCoords = getCoords(slider);
            button1.style.marginLeft = '0px';
            button2.style.marginLeft = (slider.offsetWidth-button1.offsetWidth) + 'px';
            between.style.width = (slider.offsetWidth-button1.offsetWidth) + 'px';
            inpt1.value = min;
            inpt2.value = max;

            inpt1.onchange= function(evt)
            {
                if (parseInt(inpt1.value) < min)
                    inpt1.value = min;
                if (parseInt(inpt1.value) > max)
                    inpt1.value = max;
                if (parseInt(inpt1.value) > parseInt(inpt2.value))
                {
                    var temp = inpt1.value;
                    inpt1.value = inpt2.value;
                    inpt2.value = temp;
                }


                var sliderCoords = getCoords(slider);
                var per1 = parseInt(inpt1.value-min)*100/(max-min);
                var per2 = parseInt(inpt2.value-min)*100/(max-min);
                var left1 = per1*(slider.offsetWidth-button1.offsetWidth)/100;
                var left2 = per2*(slider.offsetWidth-button1.offsetWidth)/100;

                button1.style.marginLeft = left1 + 'px';
                button2.style.marginLeft = left2 + 'px';

                if (left1 > left2)
                {
                    between.style.width = (left1-left2) + 'px';
                    between.style.marginLeft = left2 + 'px';
                }
                else
                {
                    between.style.width = (left2-left1) + 'px';
                    between.style.marginLeft = left1 + 'px';
                }
            }
            inpt2.onchange= function(evt)
            {
                if (parseInt(inpt2.value) < min)
                    inpt2.value = min;
                if (parseInt(inpt2.value) > max)
                    inpt2.value = max;
                if (parseInt(inpt1.value) > parseInt(inpt2.value))
                {
                    var temp = inpt1.value;
                    inpt1.value = inpt2.value;
                    inpt2.value = temp;
                }

                var sliderCoords = getCoords(slider);
                var per1 = parseInt(inpt1.value-min)*100/(max-min);
                var per2 = parseInt(inpt2.value-min)*100/(max-min);
                var left1 = per1*(slider.offsetWidth-button1.offsetWidth)/100;
                var left2 = per2*(slider.offsetWidth-button1.offsetWidth)/100;

                button1.style.marginLeft = left1 + 'px';
                button2.style.marginLeft = left2 + 'px';

                if (left1 > left2)
                {
                    between.style.width = (left1-left2) + 'px';
                    between.style.marginLeft = left2 + 'px';
                }
                else
                {
                    between.style.width = (left2-left1) + 'px';
                    between.style.marginLeft = left1 + 'px';
                }
            }

            /*mouse*/
            button1.onmousedown = function(evt) {
                var sliderCoords = getCoords(slider);
                var betweenCoords = getCoords(between);
                var buttonCoords1 = getCoords(button1);
                var buttonCoords2 = getCoords(button2);
                var shiftX2 = evt.pageX - buttonCoords2.left;
                var shiftX1 = evt.pageX - buttonCoords1.left;

                document.onmousemove = function(evt) {
                    var left1 = evt.pageX - shiftX1 - sliderCoords.left;
                    var right1 = slider.offsetWidth - button1.offsetWidth;
                    if (left1 < 0) left1 = 0;
                    if (left1 > right1) left1 = right1;
                    button1.style.marginLeft = left1 + 'px';


                    shiftX2 = evt.pageX - buttonCoords2.left;
                    var left2 = evt.pageX - shiftX2 - sliderCoords.left;
                    var right2 = slider.offsetWidth - button2.offsetWidth;
                    if (left2 < 0) left2 = 0;
                    if (left2 > right2) left2 = right2;

                    var per_min = 0;
                    var per_max = 0;
                    if (left1 > left2)
                    {
                        between.style.width = (left1-left2) + 'px';
                        between.style.marginLeft = left2 + 'px';

                        per_min = left2*100/(slider.offsetWidth-button1.offsetWidth);
                        per_max = left1*100/(slider.offsetWidth-button1.offsetWidth);
                    }
                    else
                    {
                        between.style.width = (left2-left1) + 'px';
                        between.style.marginLeft = left1 + 'px';

                        per_min = left1*100/(slider.offsetWidth-button1.offsetWidth);
                        per_max = left2*100/(slider.offsetWidth-button1.offsetWidth);
                    }
                    inpt1.value= (parseInt(min)+Math.round((max-min)*per_min/100));
                    inpt2.value= (parseInt(min)+Math.round((max-min)*per_max/100));

                };
                document.onmouseup = function() {
                    document.onmousemove = document.onmouseup = null;
                };
                return false;
            };

            button2.onmousedown = function(evt) {
                var sliderCoords = getCoords(slider);
                var betweenCoords = getCoords(between);
                var buttonCoords1 = getCoords(button1);
                var buttonCoords2 = getCoords(button2);
                var shiftX2 = evt.pageX - buttonCoords2.left;
                var shiftX1 = evt.pageX - buttonCoords1.left;

                document.onmousemove = function(evt) {
                    var left2 = evt.pageX - shiftX2 - sliderCoords.left;
                    var right2 = slider.offsetWidth - button2.offsetWidth;
                    if (left2 < 0) left2 = 0;
                    if (left2 > right2) left2 = right2;
                    button2.style.marginLeft = left2 + 'px';


                    shiftX1 = evt.pageX - buttonCoords1.left;
                    var left1 = evt.pageX - shiftX1 - sliderCoords.left;
                    var right1 = slider.offsetWidth - button1.offsetWidth;
                    if (left1 < 0) left1 = 0;
                    if (left1 > right1) left1 = right1;

                    var per_min = 0;
                    var per_max = 0;

                    if (left1 > left2)
                    {
                        between.style.width = (left1-left2) + 'px';
                        between.style.marginLeft = left2 + 'px';
                        per_min = left2*100/(slider.offsetWidth-button1.offsetWidth);
                        per_max = left1*100/(slider.offsetWidth-button1.offsetWidth);
                    }
                    else
                    {
                        between.style.width = (left2-left1) + 'px';
                        between.style.marginLeft = left1 + 'px';
                        per_min = left1*100/(slider.offsetWidth-button1.offsetWidth);
                        per_max = left2*100/(slider.offsetWidth-button1.offsetWidth);
                    }
                    inpt1.value= (parseInt(min)+Math.round((max-min)*per_min/100));
                    inpt2.value= (parseInt(min)+Math.round((max-min)*per_max/100));

                };
                document.onmouseup = function() {
                    document.onmousemove = document.onmouseup = null;
                };
                return false;
            };

            button1.ondragstart = function() {
                return false;
            };
            button2.ondragstart = function() {
                return false;
            };

            function getCoords(elem) {
                var box = elem.getBoundingClientRect();
                return {
                    top: box.top + pageYOffset,
                    left: box.left + pageXOffset
                };
            }

        }
    })

    document.getElementById("formulario").addEventListener('submit', validarFormulario);
});

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

function validarFormulario(evento) {
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
