/* Return r,g and b values given a hexadecimal value */
function extractColors(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return { r, g, b };
}

/* Set opacity given a hexadecimal color returning an rgba version */
function addAlpha(hex: string, alpha: number): string {
  const { r, g, b } = extractColors(hex);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default addAlpha;
