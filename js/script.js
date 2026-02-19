document.addEventListener("DOMContentLoaded", function () {

    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");
        const icon = item.querySelector(".icon");

        question.addEventListener("click", () => {

            // Close others
            document.querySelectorAll(".faq-answer").forEach(a => {
                if (a !== answer) a.style.maxHeight = null;
            });

            document.querySelectorAll(".icon").forEach(i => {
                if (i !== icon) i.textContent = "+";
            });

            // Toggle current
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
                icon.textContent = "+";
            } else {
                answer.style.maxHeight = answer.scrollHeight + "px";
                icon.textContent = "−";
            }

        });
    });

});
