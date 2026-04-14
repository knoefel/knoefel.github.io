export function formatSingle(iso: string): string {
  const [year, month] = iso.split('-');
  return `${month}/${year}`;
}

export function formatRange(from: string, to: string | null): string {
  if (to === null) return `${formatSingle(from)} – heute`;
  return `${formatSingle(from)} – ${formatSingle(to)}`;
}
