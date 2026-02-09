// Utility helper functions for performance optimization

/**
 * Debounce function to limit the rate at which a function can fire
 * @param {Function} func - The function to debounce
 * @param {number} wait - The number of milliseconds to delay
 * @returns {Function} - Debounced function
 */
export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle function to ensure a function is only called once per specified time period
 * @param {Function} func - The function to throttle
 * @param {number} limit - The time period in milliseconds
 * @returns {Function} - Throttled function
 */
export function throttle(func, limit) {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Get responsive background image path based on window width
 * @param {number} width - Current window width
 * @returns {string} - Image path
 */
export function getResponsiveBgImage(width) {
  return width < 768 ? "/img/mobilebanner.webp" : "/img/banner.webp";
}
