$(document).ready(() => {
	// inicializando cosas de materialize
	$('.sidenav').sidenav();
	$('.tabs').tabs();
	$('.datepicker').datepicker({
		i18n: {
			months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
			monthsShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Set", "Oct", "Nov", "Dic"],
			weekdays: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
			weekdaysShort: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
			weekdaysAbbrev: ["D", "L", "M", "M", "J", "V", "S"]
		},
		selectMonths: true, // Creates a dropdown to control month
		selectYears: 100, // Creates a dropdown of 15 years to control year
		format: 'yyyy/mm/dd',
		maxDate: new Date()
	});
	$('select').formSelect();
	//funcionalidad de formulario	
	document.getElementById('formulario').reset();
	$('#label-age').addClass('active');
	$('.datepicker-done').on('click', () => {

		function calcularEdad(fecha) {
			var hoy = new Date();
			var cumpleanos = new Date(fecha);
			var edad = hoy.getFullYear() - cumpleanos.getFullYear();
			var m = hoy.getMonth() - cumpleanos.getMonth();
			if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
				edad = edad - 1;
			}
			return edad;
		}
		$('#age').val(calcularEdad($('#fecha_nacimiento').val()))
	})
	$('#fecha_nacimiento').on('focus', function () {
		$(this).click()
	})
	function validarFormulario(evento) {

		function validarLongitud(campo, minlength, maxlength) {
			if (campo.length >= minlength && campo.length <= maxlength) {
				return true;
			} else {
				return false;
			}
		}
		function validarUsuario(campo) {
			charextrains = [" “ ", " ” ", " • ", " – ", " — ", " ˜ ", " ™ ", " š ", " › ", " œ ", " ž ", " Ÿ ", " Œ ", " ¡ ", " ¢ ", " £ ", " ¤ ", " ¥ ", " ¦ ", " § ", " ¨ ", " © ", " ª ", "@", "#", " « ", " ¬ ", " ­ ", " ® ", " ~ ", " Δ ", " € ", " ‚ ", " ƒ ", " „ ", " … ", " † ", " ‡ ", " ˆ ", " ‰ ", " Š ", " ‹ ", " ¯ ", " ° ", " ± ", " ² ", " ³ ", " ´ ", " µ ", " ¶ ", " · ", " ¸ ", " ¹ ", " º ", " » ", " ¼ ", " ½ ", " ¾ ", " ¿ ", " À ", " Á ", " Â ", " Ã ", " Ä ", " Å ", " Æ ", " Ç ", " È ", " É ", " Ê "];
			var com = true;
			charextrains.forEach(element => {
				element = element.trim()
				if (campo.includes(element)) {
					com = false;
					return;
				}
			})
			return (com);
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
			return (validarLongitud(campo, 15, 20) && /^[0-9A-Za-z/#%&]+$/.test(campo) && num && com && letter);
		}

		evento.preventDefault();

		const toast = (message) => {
			M.toast({
				html: message,
				classes: 'amber accent-4 black-text'
			})
		}
		var message;
		var user = $('#user');
		if (!validarUsuario(user.val())) {
			message = "El usuario no debe contener caracteres raros";
			toast(message)
			window.scroll(0, 0);
			user.focus()
			return;
		}

		var password = $('#password');
		if (!validarPassword(password.val())) {
			message = "Verifica que hayas ingresado un password correcto, Mínimo 15 caracteres, máximo 20. Debe contener letras, mayusculas, números y/o [#, /, %, $]";
			toast(message)
			window.scroll(0, 0);
			password.focus()
			return;
		}

		var confirmpassword = $('#password2');
		if (password.val() != confirmpassword.val()) {
			message = "Las contraseñas no coinciden";
			toast(message)
			window.scroll(0, 0);
			confirmpassword.focus()
			return;
		}

		this.submit();
	}

	$.ajax({
		// la URL para la petición
		url: 'https://raw.githubusercontent.com/marcovega/colombia-json/master/colombia.min.json',
		// la información a enviar
		// (también es posible utilizar una cadena de datos)
		//data: {id: 123},
		// especifica si será una petición POST o GET
		type: 'GET',
		// el tipo de información que se espera de respuesta
		dataType: 'json',
		// código a ejecutar si la petición es satisfactoria;
		// la respuesta es pasada como argumento a la función
		success: function (json) {
			var departments = `<option value="" disabled selected>Choose your option</option>`;
			for (let item of json) {
				departments += `
					<option value="${json.indexOf(item)}">${item.departamento}</option>
				`;
			}
			$('#departamentos').html(departments);
			$('select').formSelect();
			$('#departamentos').on('change', function () {
				var citys = '<option value="" disabled selected>Choose your option</option>';
				for (let item of json[$(this).val()].ciudades) {
					citys += `
						<option value="${json[$(this).val()].ciudades.indexOf(item)}">${item}</option>
					`;
				}
				$('#municipios').html(citys);
				$('select').formSelect();
			});
		}
		// código a ejecutar si la petición falla;
		// son pasados como argumentos a la función
		// el objeto de la petición en crudo y código de estatus de la petición
		//error: function (xhr, status) {
		//	alert('Disculpe, existió un problema');
		//},

		// código a ejecutar sin importar si la petición falló o no
		//complete: function (xhr, status) {
		//alert('Petición realizada');
		//}
	})

	$("#formulario").on('submit', validarFormulario);
	//función click para menú integrantes
	$('#boton0').on('click', () => {
		//$('#formulario-menu').hide();
		$('#integrantes-menu').show(500);
	});
	$('#boton1').on('click', () => {
		$('#integrantes-menu').hide();
		//$('#formulario-menu').show(500);
	})

});

