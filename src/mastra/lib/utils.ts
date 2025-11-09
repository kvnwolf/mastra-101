export function toMultiline(lines: unknown[]): string {
  return lines
    .filter(Boolean)
    .map((line) => (Array.isArray(line) ? toMultiline(line) : line))
    .join("\n");
}
