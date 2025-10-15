export default function (fn: () => void) {
  const windowWithPrefix = window as Window & {
    webkitRequestAnimationFrame?: typeof window.requestAnimationFrame;
    mozRequestAnimationFrame?: typeof window.requestAnimationFrame;
  };

  const defer = window.requestAnimationFrame || windowWithPrefix.webkitRequestAnimationFrame || windowWithPrefix.mozRequestAnimationFrame || function () {
    return setTimeout(fn, 0);
  };

  return defer(fn);
}