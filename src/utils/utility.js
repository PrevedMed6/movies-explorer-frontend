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
  result = result.filter((card) => {
    return (
      card.nameRU.toLowerCase().includes(searchText.toLowerCase()) ||
      card.nameEN.toLowerCase().includes(searchText.toLowerCase())
    );
  });
  if (switcherOn) {
    result = filterShortMetter(result);
  }
  return result;
}

export function filterShortMetter(cards)
{
  return cards.filter((card) => {
    return card.duration <= 40;
  });
}
