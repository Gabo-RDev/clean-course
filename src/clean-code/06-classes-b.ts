(() => {
	type Gender = 'M' | 'F';

	interface PersonPros {
		birthdate: Date;
		gender: Gender;
		name: string;
	}
	class Person {
		public birthdate: Date;
		public gender: Gender;
		public name: string;
		constructor({ name, gender, birthdate }: PersonPros) {
			this.name = name;
			this.gender = gender;
			this.birthdate = birthdate;
		}
	}

	interface UserProps {
		email: string;
		role: string;
		birthdate: Date;
		gender: Gender;
		name: string;
	}

	class User extends Person {
		public email: string;
		public lastAccess: Date;
		public role: string;
		constructor({ email, role, name, gender, birthdate }: UserProps) {
			super({ name, gender, birthdate });
			this.email = email;
			this.role = role;
			this.lastAccess = new Date();
		}

		checkCredentials() {
			return true;
		}
	}

	interface UserSettingsProps {
		birthdate: Date;
		email: string;
		gender: Gender;
		lastOpenFolder: string;
		name: string;
		role: string;
		workingDirectory: string;
	}

	class UserSettings extends User {
		public lastOpenFolder: string;
		public workingDirectory: string;
		constructor({
			birthdate,
			email,
			gender,
			lastOpenFolder,
			name,
			role,
			workingDirectory,
		}: UserSettingsProps) {
			super({ email, role, name, gender, birthdate });
			this.workingDirectory = workingDirectory;
			this.lastOpenFolder = lastOpenFolder;
		}
	}

	const userSettings = new UserSettings({
		workingDirectory: '/usr/home',
		lastOpenFolder: '/home',
		email: 'gabriel@example.com',
		role: 'Admin',
		name: 'Gabriel',
		gender: 'M',
		birthdate: new Date('2025-02-18'),
	});

	console.log({ userSettings });
})();
