export abstract class Vehicle {
	abstract getNumbersOfSeats(): number;
}

export class Tesla extends Vehicle {
	constructor(private numberOfSeats: number) {
		super();
	}

	getNumbersOfSeats(): number {
		return this.numberOfSeats;
	}
}

export class Audi extends Vehicle {
	constructor(private numberOfSeats: number) {
		super();
	}

	getNumbersOfSeats(): number {
		return this.numberOfSeats;
	}
}

export class Toyota extends Vehicle {
	constructor(private numberOfSeats: number) {
		super();
	}

	getNumbersOfSeats(): number {
		return this.numberOfSeats;
	}
}

export class Honda extends Vehicle {
	constructor(private numberOfSeats: number) {
		super();
	}

	getNumbersOfSeats(): number {
		return this.numberOfSeats;
	}
}

export class Ford extends Vehicle {
	constructor(private numberOfSeats: number) {
		super();
	}
	getNumbersOfSeats(): number {
		return this.numberOfSeats;
	}
}
