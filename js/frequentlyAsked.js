const accordionItems = document.querySelectorAll('.accordion-item');
accordionItems.forEach(item => {
    const button = item.querySelector('.custom-accordion-button');
    const content = item.querySelector('.content');
    button.addEventListener('click', () => {
        const expanded = button.getAttribute('aria-expanded') === 'true';
        button.setAttribute('aria-expanded', !expanded);
        content.style.display = expanded ? 'none' : 'block';
    });
});
