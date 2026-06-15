// Date helpers for time-based content (auto-expiring banners & events).
// All comparisons are done at local midnight so the UI flips exactly on the day.

const atMidnight = (d: Date) => {
  const copy = new Date(d);
  copy.setHours(0, 0, 0, 0);
  return copy;
};

/** Parse a human date string like "June 20, 2026". Returns null if unparseable. */
export const parseEventDate = (value: string): Date | null => {
  const d = new Date(value);
  return isNaN(d.getTime()) ? null : d;
};

/**
 * True once the given date has fully passed (i.e. it is now the day after or later).
 * An event dated "June 20, 2026" stays "not past" through all of June 20.
 */
export const isPastDate = (value: string): boolean => {
  const d = parseEventDate(value);
  if (!d) return false;
  return atMidnight(d) < atMidnight(new Date());
};

/**
 * True while today is strictly before the given deadline.
 * Use for "register before X" offers — flips off on the deadline day itself.
 */
export const isBeforeDate = (value: string): boolean => {
  const d = parseEventDate(value);
  if (!d) return true;
  return atMidnight(new Date()) < atMidnight(d);
};
