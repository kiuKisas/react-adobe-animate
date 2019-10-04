const hexToRgba = (color: string, opacity: string|number): string => {
  const r = parseInt(color.substring(1, 3), 16);
  const g = parseInt(color.substring(3, 5), 16);
  const b = parseInt(color.substring(5, 7), 16);

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

export default hexToRgba;
