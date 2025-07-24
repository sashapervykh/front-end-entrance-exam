export function triggerRipple(event, element) {
  element.classList.remove('ripple');
  const rect = element.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  document.documentElement.style.setProperty('--ripple-x', `${x}px`);
  document.documentElement.style.setProperty('--ripple-y', `${y}px`);

  element.classList.add('ripple');
}
