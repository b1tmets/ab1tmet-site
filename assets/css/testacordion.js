const observer = new IntersectionObserver((entries) => {}, {threshold: 0.5});
const listItem = document.querySelectorAll('li');
listItem.forEach((li) => {});
observer.observe(li);
entries.forEach((entry) => {
  if (entry.isIntersecting) {}
});
if (entry.isIntersecting) {
  li.classList.add('show');
}