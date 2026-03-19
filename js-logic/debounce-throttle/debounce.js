export default function debounce(func, wait) {
  let timeoutId;

  const debounced = function (...args) {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      timeoutId = null;
      func.apply(this, args);
    }, wait);
  };

  debounced.cancel = () => {
    clearTimeout(timeoutId);

    timeoutId = null;
  };

  debounced.pending = () => !!timeoutId;

  return debounced;
}
