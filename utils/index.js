export const sortByDate = (a, b) => {
  return new Date(b.content.date) - new Date(a.content.date);
};
export const sortByTitle = (a, b) => {
  if (a.content.title > b.content.title) {
    return -1;
  }
  if (a.content.title < b.content.title) {
    return 1;
  }
  return 0;
};

export const getDateShort = (date) => {
  return new Date(date).toLocaleDateString(undefined, {
    month: 'short',
    day: 'numeric',
  });
};
export const getDateFull = (date) => {
  return new Date(date).toLocaleDateString(undefined, {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
};
