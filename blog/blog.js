document.querySelector(".hamburger").addEventListener("click", () => {
  const navLinks = document.querySelector("nav ul");
  navLinks.classList.toggle("show");

  if (navLinks.classList.contains("show")) {
    const fullHeight = navLinks.scrollHeight + "px";
    navLinks.style.height = fullHeight;
  } else {
    navLinks.style.height = "0";
  }
});

function filterPosts() {
  const input = document.getElementById("searchInput");
  const filter = input.value.toLowerCase();
  const posts = document.querySelectorAll(".post");

  posts.forEach((post) => {
    const title = post.querySelector("h1").textContent.toLowerCase();
    const content = post.querySelector(".content").textContent.toLowerCase();

    if (title.includes(filter) || content.includes(filter)) {
      post.style.display = "";
    } else {
      post.style.display = "none";
    }
  });
}
document.querySelectorAll(".read-more-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const parentParagraph = button.parentElement;
    const moreText = parentParagraph.querySelector(".more-text");
    const dots = parentParagraph.querySelector(".dots");

    if (button.textContent === "Read more") {
      moreText.style.display = "inline";
      dots.style.display = "none";
      button.textContent = "Read less";
    } else {
      moreText.style.display = "none";
      dots.style.display = "inline";
      button.textContent = "Read more";
    }
  });
});

function toggleLike(element) {
  const likeCountElement = element.querySelector(".like-count");
  let count = parseInt(likeCountElement.textContent, 10);
  let isLiked = element.classList.contains("filled-heart");

  if (isLiked) {
    count--;
    element.classList.remove("filled-heart");
    element.querySelector("i").classList.replace("fa-solid", "fa-regular");
  } else {
    count++;
    element.classList.add("filled-heart");
    element.querySelector("i").classList.replace("fa-regular", "fa-solid");
  }

  likeCountElement.textContent = count;
}
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Form submitted!");
  });
