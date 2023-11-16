/**
 * 262. Cache with Time Limit
 * Problem Link: https://leetcode.com/problems/chache-with-time-limit/
 * Solution Link (Personal):
 */

class TimeLimitedCache {
  constructor() {
    this.cache = new Map();
  }

  set(key, value, duration) {
    const currentTime = Date.now();
    const expirationTime = currentTime + duration;

    if (this.cache.has(key)) {
      // If the key exists, check if it's still valid
      if (this.cache.get(key).expirationTime > currentTime) {
        // Update the value and expiration time
        this.cache.set(key, { value, expirationTime });
        return true;
      }
    }

    this.cache.set(key, { value, expirationTime });
    return false;
  }

  get(key) {
    const currentTime = Date.now();

    if (this.cache.has(key)) {
      const { value, expirationTime } = this.cache.get(key);

      if (expirationTime > currentTime) {
        return value;
      }
    }

    return -1;
  }

  count() {
    const currentTime = Date.now();

    // Clean up expired entries
    for (const [key, { expirationTime }] of this.cache) {
      if (expirationTime <= currentTime) {
        this.cache.delete(key);
      }
    }

    return this.cache.size;
  }
}
