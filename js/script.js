let numberOfFilms;

function start() {
	numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
	while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
	}
}

start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

function rememberMyFilms() {
	for (let index = 0; index < 2; index++) {
		let movie = prompt("Один из последних просмотренных фильмов?");
		let star = prompt("На сколько оцените его?");
		if (
			movie != null &&
			star != null &&
			movie != "" &&
			star != "" &&
			movie.length < 50
		) {
			personalMovieDB["movies"][movie] = star;
			console.log("done");
		} else {
			console.log("error");
			index--;
		}
	}
}

rememberMyFilms();

function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		console.log("Просмотрено довольно мало фильмов");
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
		console.log("Вы классный зритель");
	} else if (personalMovieDB.count >= 30) {
		console.log("Вы киноман");
	} else {
		console.log("Произошла ошибка");
	}
}

detectPersonalLevel();

function showMyDB(hidden) {
	if (!hidden) {
		console.log(personalMovieDB);
	}
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
	for (let index = 1; index <= 3; index++) {
		let genres = prompt(`Ваш любисый жанр под номером ${index}`);
		if (genres != null && genres != "" && genres.length < 50) {
			personalMovieDB["genres"].push(genres);
			console.log("done");
		} else {
			console.log("error");
			index--;
		}
	}
}
writeYourGenres();19