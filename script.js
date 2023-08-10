
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        }
    });
};

document.getElementById('downloadButton').addEventListener('click', function() {
  // Replace 'your-pdf-file.pdf' with the actual URL of your PDF file
  var pdfUrl = './images/resume.pdf';

  // Create a hidden anchor element
  var anchor = document.createElement('a');
  anchor.href = pdfUrl;
  anchor.target = '_blank'; // Open in a new tab/window
  anchor.download = 'downloaded-file.pdf'; // Specify the desired file name

  // Trigger a click event on the anchor element
  anchor.click();
});


const moreText = document.getElementById("moreText");
const readMoreBtn = document.getElementById("readMoreBtn");

readMoreBtn.addEventListener("click", function() {
  if (moreText.style.display === "none") {
    moreText.style.display = "flex"; 
    readMoreBtn.textContent = "Read Less";
  } else {
    moreText.style.display = "none";
    readMoreBtn.textContent = "Read More";
  }
});

const moretext = document.getElementById("moretext");
const readMoreButn = document.getElementById("readMoreButn");

readMoreButn.addEventListener("click", function() {
  if (moretext.style.display === "none") {
    moretext.style.display = "inline"; 
    readMoreButn.textContent = "Read Less";
  } else {
    moretext.style.display = "none";
    readMoreButn.textContent = "Read More";
  }
});

const moretext2 = document.getElementById("moretext2");
const readMoreButtn = document.getElementById("readMoreButtn");

readMoreButtn.addEventListener("click", function() {
  if (moretext2.style.display === "none") {
    moretext2.style.display = "inline"; 
    readMoreButtn.textContent = "Read Less";
  } else {
    moretext2.style.display = "none";
    readMoreButtn.textContent = "Read More";
  }
});

const moretext3 = document.getElementById("moretext3");
const readMoreButton = document.getElementById("readMoreButton");

readMoreButton.addEventListener("click", function() {
  if (moretext3.style.display === "none") {
    moretext3.style.display = "inline"; 
    readMoreButton.textContent = "Read Less";
  } else {
    moretext3.style.display = "none";
    readMoreButton.textContent = "Read More";
  }
});


function myFunction() {
    var x = document.getElementById("navBar");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  const image = document.getElementById('myImage');
  let imageIndex = 1;

  image.addEventListener('click', function() {
    imageIndex = (imageIndex % 2) + 1; // Toggle between 1 and 2
    const newImageSrc = imageIndex === 1 ? './images/xicon.png' : './images/menu-regular-24.png';
    image.src = newImageSrc;
  });
