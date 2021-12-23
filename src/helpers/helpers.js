export const truncate = (text) => {
  if (text.length <= 50) return text;
  return text.substring(0, 50) + "...";
};
