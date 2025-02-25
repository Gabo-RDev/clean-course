(() => {
	type Gender = 'M' | 'F';

	// Aplicando el principio de responsabilidad unica
	// Priorizar la composicion frente a la herencia

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
	}

	class User {
		public email: string;
		public lastAccess: Date;
		public role: string;
		constructor({ email, role }: UserProps) {
			this.email = email;
			this.role = role;
			this.lastAccess = new Date();
		}

		checkCredentials() {
			return true;
		}
	}

	interface SettingsProps {
		lastOpenFolder: string;
		workingDirectory: string;
	}

	class Settings {
		public lastOpenFolder: string;
		public workingDirectory: string;
		constructor({ lastOpenFolder, workingDirectory }: SettingsProps) {
			this.workingDirectory = workingDirectory;
			this.lastOpenFolder = lastOpenFolder;
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

	class UserSettings {
		public person: Person;
		public user: User;
		public settings: Settings;
		constructor({
			name,
			gender,
			birthdate,
			email,
			role,
			lastOpenFolder,
			workingDirectory,
		}: UserSettingsProps) {
			this.person = new Person({ name, gender, birthdate });
			this.user = new User({ email, role });
			this.settings = new Settings({ lastOpenFolder, workingDirectory });
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
