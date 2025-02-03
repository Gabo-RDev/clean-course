(() => {
	function getMovieById(movieId: number) {
		console.log({ movieId });
	}

	function getMovieCastById(movieId: number) {
		console.log({ movieId });
	}

	function getActorBioById(actorId: number) {
		console.log({ actorId });
	}

	// Crear una película
	interface Movie {
		cast: string[];
		description: string;
		rating: number;
		title: string;
	}
	function createMovie({ title, description, rating, cast }: Movie) {
		console.log({ title, description, rating, cast });
	}

	// Crea un nuevo actor
	function createActor(fullName: string, birthDate: Date): boolean {
		// tarea asincrona para verificar nombre
		// ..
		// ..
		if (fullName === 'fernando') return false;

		console.log('Crear actor', birthDate);
		return true;
	}
})();
