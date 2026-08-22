// Summary statistics helpers.

/**
 * Arithmetic mean of a non-empty list of numbers.
 * @param {number[]} values
 * @returns {number} the mean, or NaN for an empty list
 */
function mean(values) {
  if (values.length === 0) return NaN;
  let total = 0;
  for (let i = 0; i < values.length; i++) {
    total += values[i];
  }
  return total / values.length;
}

/**
 * Largest value in a non-empty list.
 * @param {number[]} values
 * @returns {number} the maximum, or -Infinity for an empty list
 */
function max(values) {
  let best = -Infinity;
  for (const v of values) {
    if (v > best) best = v;
  }
  return best;
}

/**
 * Percentage of `part` relative to `whole`.
 * @param {number} part
 * @param {number} whole
 * @returns {number} the percentage, or NaN when `whole` is 0
 */
function percentOf(part, whole) {
  if (whole === 0) return NaN;
  return (part / whole) * 100;
}

/**
 * Fetch a user record and return its display name, upper-cased.
 * @param {string} userId
 * @returns {Promise<string>}
 */
async function displayName(userId) {
  const response = await fetch(`https://example.invalid/users/${userId}`);
  if (!response.ok) {
    throw new Error(`user lookup failed: ${response.status}`);
  }
  const user = await response.json();
  return user.name.toUpperCase();
}

module.exports = { mean, max, percentOf, displayName };
