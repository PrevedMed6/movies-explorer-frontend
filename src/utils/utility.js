import { externalUrl } from "./constants";

export function getDurationString(duration) {
  const hours = parseInt(duration / 60);
  const minutes = parseInt(duration % 60);
  const result = `${hours > 0 ? hours + "ч" : ""} ${
    minutes > 0 ? minutes + "мин" : ""
  }`;
  return result;
}

export function filterCards(searchText, switcherOn, cards) {
  let result = cards;
  if (searchText) {
    result = result.filter((card) => {
      return (
        card.nameRU.toLowerCase().includes(searchText.toLowerCase()) ||
        card.nameEN.toLowerCase().includes(searchText.toLowerCase())
      );
    });
  }
  if (switcherOn) {
    result = filterShortMetter(result);
  }
  return result;
}

export function filterShortMetter(cards) {
  return cards.filter((card) => {
    return card.duration <= 40;
  });
}

export function mapExternalCards(result, savedResult) {
  const mappedResult = result.map((movie) => {
    const savedMovie = savedResult?.data?.find((savedMovie) => {
      return savedMovie.movieId === movie.id;
    });
    const mappedCard = {
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: `${externalUrl}${movie.image.url}`,
      trailerLink: movie.trailerLink,
      thumbnail: `${externalUrl}${movie.image.formats.thumbnail.url}`,
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
    };
    if (savedMovie?._id) {
      mappedCard.innerId = savedMovie._id;
      mappedCard.isLiked = true;
    }
    return mappedCard;
  });
  return mappedResult;
}

export function updateStore(
  cards,
  movieId,
  isLiked,
  innerId,
  searchString,
  switcher
) {
  const likedFilmIndex = cards.findIndex((film) => {
    return film.movieId === movieId;
  });
  const cloneCards = [...cards];
  cloneCards[likedFilmIndex].isLiked = isLiked;
  cloneCards[likedFilmIndex].innerId = innerId;
  const filteredFilms = filterCards(
    localStorage.getItem("searchString"),
    localStorage.getItem("switcher") === "true",
    cloneCards
  );
  localStorage.setItem("filteredCards", JSON.stringify(filteredFilms));
  localStorage.setItem("cards", JSON.stringify(cloneCards));
  return { cloneCards, filteredFilms };
}
