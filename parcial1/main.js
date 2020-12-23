$(document).ready(() => {

    var change = true;
    $("a").on('click', clickear);
    function clickear() {

        //en esta variable capturaria el padre del botón que es el  div con la clase footer
        var datos = $(this).parent().parent().children('td')
        var alimento = datos.eq(0).text()
        var calorias = datos.eq(1).text()
        var grasas = datos.eq(2).text()
        var proteina = datos.eq(3).text()
        var carbohidratos = datos.eq(4).text()

        var html = `	
									<td><input name="alimento" type="text" size="5" value="${alimento}"></td>
									<td><input name="calorias" type="text" size="3" value="${calorias}"></td>
									<td><input name="grasas" type="text" size="3" value="${grasas}"></td>
									<td><input name="proteina" type="text" size="3" value="${proteina}"></td>
									<td><input type="text" name="carbohidratos" size="3" value="${carbohidratos}"></td>
									<td>
                    <select name="ok">
											<option>bien</option>
											<option>mal</option>
										</select></td>
                  </td>
                  <td><a style="color: gray;" href="#">Editar</a></td>
        `;
        if (change) {
            $(this).parent().parent().html(html);
            change = false;

            $('#tabla').append(` 
              <br><br><br>
              Pulse aceptar para guardar los cambios o cancelar para anularlos
              <br>	
              <button type="submit" form="form1" class="btn btn-outline-primary">Aceptar</button>
              <button type="button" id="cancelar" class="btn btn-outline-secondary">Cancelar</button> 
            `)
        } else {
            alert('Solo se puede editar una línea. Recargue la página para poder editarotra')
        }

        $("#cancelar").on('click', function() {
            $('#tabla').html(`
					<table class="table text-center">
						<thead>
							<tr>
								<th scope="col">Alimento</th>
								<th scope="col">Calorías<br>(kcal)</th>
								<th scope="col">Grasas (g)</th>
								<th scope="col">Proteína<br>(g)</th>
								<th scope="col">Carbohidratos<br>(g)</th>
								<th scope="col">ok</th>
								<th scope="col">Opciones</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Arandano</td>
								<td>49</td>
								<td>0.2</td>
								<td>0.4</td>
								<td>12.7</td>
								<td><ion-icon name="happy"></ion-icon></td>
								<td><a href="#">editar</a></td>
							</tr>
							<tr>
								<td>Platano</td>
								<td>90</td>
								<td>0.3</td>
								<td>1.0</td>
								<td>23.5</td>
								<td> <ion-icon name="sad"></ion-icon></td>
								<td><a href="#">editar</a></td>
							</tr>
							<tr>
								<td>Cereza</td>
								<td>46</td>
								<td>0.4</td>
								<td>0.9</td>
								<td>10.9</td>
								<td><ion-icon name="sad"></ion-icon></td>
								<td><a href="#">editar</a></td>
							</tr>
							<tr>
								<td>Fresa</td>
								<td>37</td>
								<td>0.5</td>
								<td>0.8</td>
								<td>8.3</td>
								<td><ion-icon name="happy"></ion-icon></td>
								<td><a href="#">editar</a></td>
							</tr>
						</tbody>
						<caption>contenido nutricional por cada 100 g de alimento.</caption>
					</table>
        `);

            $("a").on('click', clickear);
            change = true;
        })
    }

})
