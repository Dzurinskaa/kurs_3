document.addEventListener("DOMContentLoaded", function () {
  const addReviewBtn = document.getElementById("addReviewBtn");
  const reviewModal = document.getElementById("reviewModal");
  const closeModal = document.querySelector(".close");
  const reviewForm = document.getElementById("reviewForm");

  // Открытие модального окна
  addReviewBtn.addEventListener("click", () => {
      reviewModal.style.display = "flex";
  });

  // Закрытие модального окна
  closeModal.addEventListener("click", () => {
      reviewModal.style.display = "none";
  });

  // Добавление отзыва
  reviewForm.onsubmit = function (event) {
      event.preventDefault();

      const name = document.getElementById("name").value;
      const comment = document.getElementById("comment").value;
      const photo = document.getElementById("photo").files[0];

      // Проверка на наличие фото
      if (!photo) {
          alert("Пожалуйста, добавьте фото.");
          return;
      }

      const reader = new FileReader();
      reader.onload = function (e) {
          const newReview = document.createElement("div");
          newReview.className = "item features-without-image col-12 col-md-6 col-lg-4";
          newReview.innerHTML = `
              <div class="item-wrapper">
                  <div class="card-box align-left">
                      <p class="card-text mbr-fonts-style display-7">
                          ${comment}
                      </p>
                      <div class="img-wrapper mt-4 mb-3">
                          <img src="${e.target.result}" alt="${name}" style="width: 100px; height: 100px; border-radius: 50%;">
                      </div>
                      <h5 class="card-title mbr-fonts-style display-7">
                          <strong>${name}</strong>
                      </h5>
                  </div>
              </div>
          `;
          document.querySelector(".reviews-list").appendChild(newReview);

          // Закрытие модального окна и сброс формы
          reviewModal.style.display = "none";
          reviewForm.reset();
      };

      reader.readAsDataURL(photo);
  };
});

