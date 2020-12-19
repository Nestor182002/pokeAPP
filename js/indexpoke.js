	class consumoApi {
		//genera numero aleatorio
		constructor(randomNumber, hola) {
			this.randomNumber = Math.floor(Math.random() * (700 - 1)) + 1;
		}

		//extraer data pokemon(nombre y imagen)--------------number1(estas son las relaciones)
		async dataPrincipal() {
			try {
				let peticion = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.randomNumber}`);
				let resultado = await peticion.json();
				this.DataImg(resultado); //metodo dataImg

			} catch (e) {

				console.log(e);
			}

		}

		//insertar data pokemon(nombre y imagen)--------------number1(estas son las relaciones)
		async DataImg(resultado) {
			document.getElementById('name-pokemon').textContent = resultado.name;
			document.getElementById('img-one').setAttribute('src', resultado.sprites.other.dream_world.front_default);
		}



		//extraer data pokemon(tasa de captura,description)--------------number2(estas son las relaciones 2)
		async dataSecundary() {
			try {

				let peticionTwo = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${this.randomNumber}/`);
				let resultadoTwo = await peticionTwo.json();
				this.datapokemonTwo(resultadoTwo);

			} catch (e) {
				console.log(e);
			}

		}

		//insertar data pokemon(tasa de captura,description,type)--------------number2(estas son las relaciones 2)
		datapokemonTwo(resultadoTwo) {
		
			//datos tasa,descipcion,type
			document.getElementById('t-captura').textContent = resultadoTwo.capture_rate;
			document.getElementById('evo-one').textContent = resultadoTwo.generation.name;
			document.getElementById('evo-two').textContent = `id: ${resultadoTwo.id}`;
			document.getElementById('type-one').textContent = resultadoTwo.egg_groups[0].name;

			//por si solo es un tipo se ordene
			if (resultadoTwo.egg_groups[1] == undefined) {
				document.getElementById('type-two').style.display = 'none';
				document.getElementById('type-one').style.margin = 'auto';
				document.getElementById('type-one').style.marginBottom = '10px'
			} else {
				document.getElementById('type-two').textContent = resultadoTwo.egg_groups[1].name;
				document.getElementById('type-two').style.display = 'inline-block';
				document.getElementById('type-one').style.margin = '';
			};

			
		


			//COLORES DE LA CARTAS----------------------------
			let containerName = document.getElementById('container-name');
			let generation = document.getElementById('evo-one');
			let id = document.getElementById('evo-two');
			let show = document.getElementById('show-more');
			let typeOne = document.getElementById('type-one');
			let typeTwo = document.getElementById('type-two');
			let captura = document.getElementById('t-captura');
			let typePoke = resultadoTwo.egg_groups[0].name
			let span = document.getElementById('span');

			switch (typePoke) {
				case 'humanshape':
					containerName.style.backgroundColor = '#bf9283';
					generation.style.backgroundColor = '#bf9283';
					id.style.backgroundColor = '#bf9283';
					show.style.backgroundColor = '#bf9283';
					typeOne.style.backgroundColor = '#bf9283';
					typeTwo.style.backgroundColor = '#bf9283';
					captura.style.backgroundColor = '#bf9283';
					span.style.color = '#bf9283'
					break;

				case 'ground':
					containerName.style.backgroundColor = '#91554f';
					generation.style.backgroundColor = '#91554f';
					id.style.backgroundColor = '#91554f';
					show.style.backgroundColor = '#91554f';
					typeOne.style.backgroundColor = '#91554f';
					typeTwo.style.backgroundColor = '#91554f';
					captura.style.backgroundColor = '#91554f';
					span.style.color = '#91554f'
					break;

				case 'fairy':
					containerName.style.backgroundColor = '#b590c6';
					generation.style.backgroundColor = '#b590c6';
					id.style.backgroundColor = '#b590c6';
					show.style.backgroundColor = '#b590c6';
					typeOne.style.backgroundColor = '#b590c6';
					typeTwo.style.backgroundColor = '#b590c6';
					captura.style.backgroundColor = '#b590c6';
					span.style.color = '#b590c6'
					break;

				case 'monster':
					containerName.style.backgroundColor = '#76378a';
					generation.style.backgroundColor = '#76378a';
					id.style.backgroundColor = '#76378a';
					show.style.backgroundColor = '#76378a';
					typeOne.style.backgroundColor = '#76378a';
					typeTwo.style.backgroundColor = '#76378a';
					captura.style.backgroundColor = '#76378a';
					span.style.color = '#76378a'
					break;

				case 'indeterminate':
					containerName.style.backgroundColor = '#7b7775';
					generation.style.backgroundColor = '#7b7775';
					id.style.backgroundColor = '#7b7775';
					show.style.backgroundColor = '#7b7775';
					typeOne.style.backgroundColor = '#7b7775';
					typeTwo.style.backgroundColor = '#7b7775';
					captura.style.backgroundColor = '#7b7775';
					span.style.color = '#7b7775'
					break;

				case 'flying':
					containerName.style.backgroundColor = '#7b7775';
					generation.style.backgroundColor = '#7b7775';
					id.style.backgroundColor = '#7b7775';
					show.style.backgroundColor = '#7b7775';
					typeOne.style.backgroundColor = '#7b7775';
					typeTwo.style.backgroundColor = '#7b7775';
					captura.style.backgroundColor = '#7b7775';
					span.style.color = '#7b7775'
					break;

				case 'mineral':
					containerName.style.backgroundColor = '#d3a596';
					generation.style.backgroundColor = '#d3a596';
					id.style.backgroundColor = '#d3a596';
					show.style.backgroundColor = '#d3a596';
					typeOne.style.backgroundColor = '#d3a596';
					typeTwo.style.backgroundColor = '#d3a596';
					captura.style.backgroundColor = '#d3a596';
					span.style.color = '#d3a596'
					break;

				case 'no-eggs':
					containerName.style.backgroundColor = '#7b7775';
					generation.style.backgroundColor = '#7b7775';
					id.style.backgroundColor = '#7b7775';
					show.style.backgroundColor = '#7b7775';
					typeOne.style.backgroundColor = '#7b7775';
					typeTwo.style.backgroundColor = '#7b7775';
					captura.style.backgroundColor = '#7b7775';
					span.style.color = '#7b7775'
					break;

				case 'plant':
					containerName.style.backgroundColor = '#6ed291';
					generation.style.backgroundColor = '#6ed291';
					id.style.backgroundColor = '#6ed291';
					show.style.backgroundColor = '#6ed291';
					typeOne.style.backgroundColor = '#6ed291';
					typeTwo.style.backgroundColor = '#6ed291';
					captura.style.backgroundColor = '#6ed291';
					span.style.color = '#6ed291'
					break;

				case 'bug':
					containerName.style.backgroundColor = '#4e305b';
					generation.style.backgroundColor = '#4e305b';
					id.style.backgroundColor = '#4e305b';
					show.style.backgroundColor = '#4e305b';
					typeOne.style.backgroundColor = '#4e305b';
					typeTwo.style.backgroundColor = '#4e305b';
					captura.style.backgroundColor = '#4e305b';
					span.style.color = '#4e305b'
					break;

				default:
					containerName.style.backgroundColor = '#08d9d6';
					generation.style.backgroundColor = '#08d9d6';
					id.style.backgroundColor = '#08d9d6';
					show.style.backgroundColor = '#08d9d6';
					typeOne.style.backgroundColor = '#08d9d6';
					typeTwo.style.backgroundColor = '#08d9d6';
					captura.style.backgroundColor = '#08d9d6';
					span.style.color = '#08d9d8'
					break;
			}

		}


	}

	//evento click---------------------
	document.getElementById('show-more').addEventListener('click', () => {

		const data = new consumoApi;
		data.dataPrincipal();


		data.dataSecundary();

	})



	//evento carga(elije un pokemon al azar cuando carga)---
	window.addEventListener('load', () => {

		const datas = new consumoApi;
		datas.dataPrincipal();

		datas.dataSecundary();
	})

	
	//barra de navegacion-----------
	
	class events {

		
		clickBars() {
			
			 contador++;	
			let containerBars = document.getElementById('categorias');

			

			if (contador == 1) {
				containerBars.style.right='0';
			}else{
				containerBars.style.right = '-170px';
				contador=0;
			}

			

	}
}

	let contador=0;
	document.getElementById('barrasCate').addEventListener('click', () => {



		let eventos = new events;
		eventos.clickBars();
	})