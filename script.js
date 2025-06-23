const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const button = item.querySelector("button");
  const question = item.querySelector("h3");
  const answer = item.querySelector(".faq-answer");
  const img = button.querySelector("img"); 

  const toggleAnswer = () => {
    const isVisible = answer.classList.toggle("visible");

    if (isVisible) {
      img.src = "./assets/images/icon-minus.svg";
    } else {
      img.src = "./assets/images/icon-plus.svg";
    }
  };
  
  button.addEventListener("click", toggleAnswer);
  question.addEventListener("click", toggleAnswer);
});