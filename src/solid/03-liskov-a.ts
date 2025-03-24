import { Tesla, Audi, Toyota, Honda, Vehicle, Ford } from './03-liskov-b';

(() => {
	const printCarSeats = (cars: Vehicle[]) => {
		/* 		for (const car of cars) {
			if (car instanceof Tesla) {
				console.log('Tesla', car.getNumbersOfSeats());
				continue;
			}
			if (car instanceof Audi) {
				console.log('Audi', car.getNumbersOfSeats());
				continue;
			}
			if (car instanceof Toyota) {
				console.log('Toyota', car.getNumbersOfSeats());
				continue;
			}
			if (car instanceof Honda) {
				console.log('Honda', car.getNumbersOfSeats());
				continue;
			}
			if (car instanceof Ford) {
				console.log('Ford', car.getNumbersOfSeats());
				continue;
			}
		} */
		cars.forEach((car) => {
			console.log(car.constructor.name, car.getNumbersOfSeats());
		});
	};

	const cars = [
		new Tesla(7),
		new Audi(2),
		new Toyota(5),
		new Honda(5),
		new Ford(2),
	];

	printCarSeats(cars);
})();
