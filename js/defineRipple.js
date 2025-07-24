export function defineRipple(event, container) {
  const rect = container.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  console.log('x:', x, event.clientX, container.offsetLeft);
  console.log('y:', y, event.clientY, container.offsetTop);
  document.documentElement.style.setProperty('--ripple-x', `${x}px`);
  document.documentElement.style.setProperty('--ripple-y', `${y}px`);
}
