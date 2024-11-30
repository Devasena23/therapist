// Toggle "Read more" functionality for About Me
document.querySelector('.read-more-button').addEventListener('click', () => {
  const aboutMe = document.querySelector('.about-me p');
  if (aboutMe.classList.contains('expanded')) {
    aboutMe.textContent = "Hello, I’m Swetha, a licensed therapist dedicated to guiding individuals through life’s challenges with empathy and expertise...";
    document.querySelector('.read-more-button').textContent = "Read more";
  } else {
    aboutMe.textContent = "Hello, I’m Swetha, a licensed therapist dedicated to guiding individuals through life’s challenges with empathy and expertise. I specialize in helping clients overcome anxiety, depression, and trauma using evidence-based approaches. My mission is to provide a safe and supportive space for individuals to explore their emotions and build resilience.";
    document.querySelector('.read-more-button').textContent = "Read less";
  }
  aboutMe.classList.toggle('expanded');
});

// Toggle "Show more testimonials" functionality
document.querySelector('.show-more-button').addEventListener('click', () => {
  const testimonialsSection = document.querySelector('.testimonials');
  const additionalTestimonials = `
    <div class="testimonial-card">
      <p>“The best therapy experience I’ve ever had. Highly recommended!”</p>
      <span>- Anonymous</span>
    </div>
    <div class="testimonial-card">
      <p>“Swetha helped me regain control of my life after years of struggling with anxiety.”</p>
      <span>- Anonymous</span>
    </div>
  `;

  if (!testimonialsSection.classList.contains('expanded')) {
    testimonialsSection.insertAdjacentHTML('beforeend', additionalTestimonials);
    document.querySelector('.show-more-button').textContent = "Show less";
  } else {
    const additionalCards = testimonialsSection.querySelectorAll('.testimonial-card:nth-child(n+3)');
    additionalCards.forEach(card => card.remove());
    document.querySelector('.show-more-button').textContent = "Show more";
  }
  testimonialsSection.classList.toggle('expanded');
});


function gonext() {
  window.location.href = "session.html";  // Replace with your home page URL
}
