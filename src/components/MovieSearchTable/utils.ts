export const generateYears = (start = 1980): Array<number> => {
  const end = new Date().getFullYear();
  const years = Array.from(Array(end - start + 1).keys()).map(x => x + start);
  return years.sort((a, b) => (a < b ? 1 : -1));
};
