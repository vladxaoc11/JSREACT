const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};
for (let index = 0; index < 2; index++) {
	let movie = prompt("Один из последних просмотренных фильмов?");
	let star = prompt("На сколько оцените его?");
	personalMovieDB["movies"][movie] = star;
}

console.log(personalMovieDB);
