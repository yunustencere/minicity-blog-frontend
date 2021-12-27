export const truncate = (text) => {
  if (text.length <= 50) return text;
  return text.substring(0, 50) + "...";
};

export const getHoveredElement = () => {
    const element = Array.from(document.querySelectorAll(":hover")).pop()
    return element ? element?.id : null; 
}