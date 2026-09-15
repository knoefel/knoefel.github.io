import { describe, it, expect } from 'vitest';
import { formatRange, formatSingle } from './formatDate';

describe('formatSingle', () => {
  it('formats YYYY-MM to MM/YYYY', () => {
    expect(formatSingle('2022-09')).toBe('09/2022');
  });
});

describe('formatRange', () => {
  it('formats ongoing role with "heute"', () => {
    expect(formatRange('2022-09', null)).toBe('09/2022 – heute');
  });
  it('formats closed range with en dash', () => {
    expect(formatRange('2020-08', '2022-04')).toBe('08/2020 – 04/2022');
  });
});
