(() => {
	type Gender = 'M' | 'F';

	// No responsabilidad unica
	class Person {
		constructor(
			public name: string,
			public gender: Gender,
			public birthdate: Date
		) {}
	}

	class User extends Person {
		public lastAccess: Date;
		constructor(
			public email: string,
			public role: string,
			name: string,
			gender: Gender,
			birthdate: Date
		) {
			super(name, gender, birthdate);
			this.lastAccess = new Date();
		}

		checkCredentials() {
			return true;
		}
	}

	class UserSettings extends User {
		constructor(
			public workingDirectory: string,
			public lastOpenFolder: string,
			email: string,
			role: string,
			name: string,
			gender: Gender,
			birthDate: Date
		) {
			super(email, role, name, gender, birthDate);
		}
	}
	const newPerson = new Person('Gabriel', 'M', new Date('2002-10-07'));
	console.log(newPerson);

	const UserSettings1 = new UserSettings(
		'/usr/home',
		'/home',
		'gabriel@example.com',
		'Admin',
		'Gabriel',
		'M',
		new Date('2025-02-18')
	);

	console.log({ UserSettings1 });
})();
