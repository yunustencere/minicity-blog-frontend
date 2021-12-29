export const truncate = (text) => {
  if (text.length <= 150) return text;
  return text.substring(0, 150) + "...";
};

export const getHoveredElement = () => {
    const element = Array.from(document.querySelectorAll(":hover")).pop()
    return element ? element?.id : null; 
}