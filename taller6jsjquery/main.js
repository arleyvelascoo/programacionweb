$(document).ready(() => {
	// inicializando cosas de materialize
	$('.sidenav').sidenav();
	$('.tabs').tabs();
	$('.datepicker').datepicker();

	//funcionalidad de formulario y grilla
	let res = $('#main')

	//función click para menú integrantes
	$('#boton0').on('click', () => {
		var resp = `
					<div class="col s12 center-align">
						<h2>Members</h2>
					</div>

					<div class="row">
						<div class="col s6">
							<div class="card">
								<div class="card-image waves-effect waves-block waves-light">
									<img class="activator" src="imgs/foto2.jpg">
								</div>
								<div class="card-content">
									<span class="card-title activator grey-text text-darken-4">Arley David Velasco-2180984<i
												class="material-icons right">more_vert</i></span>
									<p><a class="waves-effect waves-light btn-small blue-grey darken-4" href="https://www.instagram.com/arleyvelascoo/">View more</a></p>
								</div>
								<div class="card-reveal">
									<span class="card-title grey-text text-darken-4">Description<i
												class="material-icons right">close</i></span>
									<p>Sixth semester student of Systems Engineering at the Industrial University of Santander.
									</p>
								</div>
							</div>
						</div>

						<div class="col s6">
							<div class="card">
								<div class="card-image waves-effect waves-block waves-light">
									<img class="activate" src="imgs/i3.jpeg">
								</div>
								<div class="card-content">
									<span class="card-title activator grey-text text-darken-4">Horacio Antonio Camacho-2180986<i
												class="material-icons right">more_vert</i></span>
									<p><a class="waves-effect waves-light btn-small blue-grey darken-4" href="https://www.linkedin.com/in/horacio-antonio-camacho-holguin-a219a5168/">View
										more</a></p>
								</div>
								<div class="card-reveal">
									<span class="card-title grey-text text-darken-4">Description<i
												class="material-icons right">close</i></span>
									<p>Sixth semester student of Systems Engineering at the Industrial University of Santander.
									</p>
								</div>
							</div>
						</div>
					</div>`;

		res.html(resp);
	});

	//funcion click para menú formulario
	$('#boton1').on('click', () => {
		var html = `
		<h3 class="center-align">CONTACTO</h3>
				<form id="formulario" action="https://wwww.facebook.com">
					<div class="row">
						<div class="input-field col s6">
							<i class="material-icons prefix">perm_identity</i>
							<label for="nombre">Nombre</label>
							<input type="text" name="nombre" required>
						</div>
						<div class="input-field col s6">
							<i class="material-icons prefix">person_pin</i>
							<label for="apellido">Apellido</label>
							<input type="text" name="apellido" required>
						</div>					
					</div>	

					<div class="row">
						<div class="input-field col s6">
							<i class="material-icons prefix">date_range</i>
							<label for="apellido">Nacimiento</label>	<input type="text" class="datepicker" id="fecha_nacimiento" required> </div>
						<div class="input-field col s6">
							<i class="material-icons prefix">check</i>
							<label class="active" for="apellido">Edad</label>	
							<input type="text" class="" id="age" readonly value="-"> 
						</div>
					</div>				

					<div class="row">
						<div class="input-field col s6">
							<i class="material-icons prefix">email</i>
							<label for="email">Email</label>
							<input type="email" name="email" required>
						</div>	
						<div class="input-field col s6">
							<i class="material-icons prefix">assignment_ind</i>
							<label for="user">Usuario</label>
							<input type="text" id="user" required>
						</div>	
					</div>

					<div class="row">
						<div class="input-field col s6">
							<i class="material-icons prefix">password</i>
							<label for="password">Contraseña</label>
							<input type="password" id="password" required>
						</div>
						<div class="input-field col s6">
							<i class="material-icons prefix">password</i>
							<label for="password2">Confirmar</label>
							<input type="password" id="password2" required>
						</div>
					</div>

					<div class="row">
					<div class="input-field col s12">
						<select id="enfermedades">
							<option value="" disabled selected>Choose your option</option>
							<option value="yes">Sí</option>
							<option value="no">No</option>
						</select>
						<label>¿Ha sufrido enfermedades contagiosas?</label>
  				</div>
  				</div>				
					<div class="row" id="input_enfermedades">
						<div class="input-field col s12">
							<i class="material-icons prefix">mode_edit</i>
							<textarea id="icon_prefix2" class="materialize-textarea"></textarea>
							<label for="icon_prefix2">¿Cuales?. Escribalas a continuación</label>
						</div>
					</div>
					<p class="center-align">
						<button class="waves-effect waves-light btn amber accent-4 blue-grey-text text-darken-4" type="submit"><i class="material-icons right">send</i>enviar</button>
					</p>

				</form>
		`
		res.html(html)
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

		$("#formulario").on('submit', validarFormulario);

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


		$('#input_enfermedades').hide();
		$('#enfermedades').on('change', function () {
			if ($(this).val() == 'yes') {
				$('#input_enfermedades').show(300);
				console.log('vamos a mostrar una selección de enfermedades')
			} else {
				$('#input_enfermedades').hide(300);
				console.log('No vamos a mostrar una selección de enfermedades')
			}
		})
	});

	//funcion click para menú grilla jquery
	$('#boton2').on('click', () => {
		$.ajax({
			// la URL para la petición
			url: 'https://jsonplaceholder.typicode.com/users',

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
				var html = "";

				html += `
				<div class="container">
					<div class="input-field">
						<i class="material-icons prefix">search</i>
						<input id="search" class="holamundoinput " type="search" required>
						<label>Busca </label>
					</div>
        </div>
				<table id="myTable">
					<thead>
						<tr>
							<th>ID</th>
							<th>Nombre</th>
							<th>Usuario</th>
							<th>Email</th>
							<th>Dirección</th>
							<th>Telefono</th>
							<th>Sitio web</th>
							<th>Compañía</th>
						</tr>
					</thead>
					<tbody>`

				for (let item of json) {
					html += `<tr>
						<td> ${item.id} </td>
						<td> ${item.name} </td>
						<td>${item.username}</td>
						<td>${item.email}</td>
						<td>${item.address.street + " " + item.address.suite}</td>
						<td>${item.phone}</td>
						<td>${item.website}</td>
						<td>${item.company.name + " " + item.company.catchPhrase}</td>
						</tr>`
				}
				html += `</tbody>
				</table>`
				//Asigneramos el listener para poder hacer el filtrado con keyup
				res.html(html)
				$('#search').on('keyup', function () {
					var input = $(this).val().toLowerCase();
					$("#myTable tbody tr").filter(function () {
						$(this).toggle($(this).text().toLowerCase().indexOf(input) > -1);
					});


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

	});
	$('#boton').on('click', () => {
		const xhttp = new XMLHttpRequest();

		xhttp.open('GET', 'https://jsonplaceholder.typicode.com/users', true);

		xhttp.send();

		xhttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				var objeto = JSON.parse(this.responseText);
				console.log(objeto);

				let res = $('#res');
				res.html('');

				for (let item of objeto) {
					res.append('<tr><td>' + item.id + '</td><td>' + item.name + '</td></tr>')
				}
			}
		}
	});

});

