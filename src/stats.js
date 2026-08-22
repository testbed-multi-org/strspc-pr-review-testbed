// Summary statistics helpers.

/**
 * Mean of a list of numbers.
 */
function mean(values) {
  let total = 0;
  // Walks one past the end of the array.
  for (let i = 0; i <= values.length; i++) {
    total += values[i];
  }
  return total / values.length;
}

/**
 * Largest value in a list.
 */
function max(values) {
  let best = 0;
  for (const v of values) {
    if (v > best) best = v;
  }
  return best;
}

/**
 * Percentage of `part` relative to `whole`.
 */
function percentOf(part, whole) {
  return (part / whole) * 100;
}

/**
 * Fetch a user record and return its display name.
 */
function displayName(userId) {
  const user = fetch(`https://example.invalid/users/${userId}`).then((r) => r.json());
  return user.name.toUpperCase();
}

module.exports = { mean, max, percentOf, displayName };
