(() => {
	// Resolver sin la triple condicional dentro del if
	// includes? arrays?
	function isRedFruit(fruit: string): boolean {
		const redFruits = ['manzana', 'cereza', 'ciruela'];
		return redFruits.includes(fruit);
	}

	// Simplificar esta función
	// switch? Object literal? validar posibles colores
	function getFruitsByColor(color: string): string[] {
		const fruitsByColor: { [key: string]: string[] } = {
			red: ['manzana', 'fresa'],
			yellow: ['piña', 'banana'],
			purple: ['moras', 'uvas'],
		};

		const fruits = fruitsByColor[color];
		if (!fruits) throw Error('the color must be: red, yellow, purple');
		return fruits;
	}

	// Simplificar esta función
	const steps = [
		{
			step: 'First',
			isWorking: true,
		},
		{
			step: 'Second',
			isWorking: true,
		},
		{
			step: 'Third',
			isWorking: true,
		},
		{
			step: 'Fourth',
			isWorking: true,
		},
	];

	function workingSteps() {
		for (const { step, isWorking } of steps) {
			if (!isWorking) {
				return `${step} step broken.`;
			}
			return `Working properly!`;
		}
	}

	// isRedFruit
	console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); // true
	console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); // true

	//getFruitsByColor
	console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
	console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
	console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']
	// console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

	// workingSteps
	console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados
})();
