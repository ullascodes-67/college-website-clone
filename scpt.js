let img = [
  '<img src="a2.jpg" alt="nie" />',
  '<img src="a3.jpg" alt="nie" />',
  '<img src="a5.jpg" alt="nie" />',
  '<img src="b2.jpg" alt="nie" />',
  '<img src="a4.jpg" alt="nie" />',
];
let scroll = [
  ' <a href="#"><i class="fa-solid fa-user"></i><h3 style="width: 200px">Sports</h3></a>',
  ' <a href="#"><i class="fa-solid fa-user"></i><h3 style="width: 200px">NSS</h3></a>',
  ' <a href="#"><i class="fa-solid fa-user"></i><h3 style="width: 200px">Rover</h3></a>',
  ' <a href="#"><i class="fa-solid fa-user"></i><h3 style="width: 200px">Rotract</h3></a>',
  ' <a href="#"><i class="fa-solid fa-user"></i><h3 >Youth Redcross</h3></a>',
];
let count = 0;
setInterval(chImg, 4000);

function chImg() {
  document.querySelector(".slid").innerHTML = img[count];

  if (count > 3) {
    count = 0;
  } else {
    count++;
  }
}

function popOpen() {
  document.getElementById("overlay").style.display = "flex";
}
function popClose() {
  document.getElementById("overlay").style.display = "none";
}

window.addEventListener("click", function (event) {
  const clkot = document.getElementById("overlay");
  if (event.target === clkot) {
    popClose();
  }
});
let count2 = 0;

function next() {
  const slid2 = document.querySelector(".slid2");
  slid2.classList.remove("slide-anim", "slide-anim-prev");
  slid2.innerHTML = scroll[count2];
  void slid2.offsetWidth;
  slid2.classList.add("slide-anim");
  slid2.addEventListener(
    "animationend",
    () => {
      slid2.classList.remove("slide-anim");
    },
    { once: true }
  );

  count2 = (count2 + 1) % scroll.length;
}

function prev() {
  const slid2 = document.querySelector(".slid2");
  slid2.classList.remove("slide-anim", "slide-anim-prev");
  count2 = (count2 - 1 + scroll.length) % scroll.length;
  slid2.innerHTML = scroll[count2];
  void slid2.offsetWidth;
  slid2.classList.add("slide-anim-prev");
  slid2.addEventListener(
    "animationend",
    () => {
      slid2.classList.remove("slide-anim-prev");
    },
    { once: true }
  );
}

const first = document.getElementsByClassName(".slid");
window.addEventListener("scroll", () => {
  if (window.scrollY > first.offsetHeight) {
    document.getElementsByClassName("up-scroll-btn").style.display = "inline";
  }
});
