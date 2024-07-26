document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('.faq-question');

    faqItems.forEach(item => {
        item.addEventListener('click', function () {
            // Toggle the active class on the clicked question
            this.classList.toggle('active');

            // Get the next element sibling (the answer div) and toggle its display property
            const answer = this.nextElementSibling;
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
            } else {
                answer.style.display = 'block';
            }

            // Close other open answers
            faqItems.forEach(i => {
                if (i !== this && i.classList.contains('active')) {
                    i.classList.remove('active');
                    i.nextElementSibling.style.display = 'none';
                }
            });
        });
    });
});
