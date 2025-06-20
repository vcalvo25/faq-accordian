const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
    const button = item.querySelector("button");
    const answer = item.querySelector(".faq-answer");

    button.addEventListener("click", () => {
        answer.classList.toggle("visible");
    });
});
