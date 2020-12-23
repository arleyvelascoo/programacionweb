function getURLParameter(url, name) {return (RegExp(name + '=' + '(.+?)(&|$)').exec(url) || [, null])[1];}

$(document).ready(() => {

	var url = window.location.href

	var alimento = getURLParameter(url, 'alimento');
	var calorias = getURLParameter(url, 'calorias');
	var grasas = getURLParameter(url, 'grasas');
	var proteina = getURLParameter(url, 'proteina')
	var carbohidratos = getURLParameter(url, 'carbohidratos')
	var ok = getURLParameter(url, 'ok')

	console.log(calorias)

	$('#alimento').text(alimento)
	$('#calorias').text(calorias)
	$('#grasas').text(grasas)
	$('#proteina').text(proteina)
	$('#carbohidratos').text(carbohidratos)

	if (ok == "bien") {

		$('#carita').attr('name', 'happy')

	} else {

		$('#carita').attr('name', 'sad')

	}

})
