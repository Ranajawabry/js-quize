Swal.fire({
  title: "Test completed",
  icon: "info",
  html: "You have answered all questions",
  showCloseButton: true,
  focusConfirm: false,
  confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
  confirmButtonAriaLabel: "Thumbs up, great!",
});

console.log(document.getElementById("userName"));
let userName;
document.getElementById("userName").addEventListener("keyup", () => {
  userName = document.getElementById("userName").value;
  localStorage.setItem("userName", userName);
  // console.log(userName)
});

const getCertificate = () => {
  if (document.getElementById("userName").value === "") {
    Swal.fire({
      title: "Enter your name first",
      icon: "info",
      html:
        "You can use <b>bold text</b>, " +
        '<a href="//sweetalert2.github.io">links</a> ' +
        "and other HTML tags",
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
      confirmButtonAriaLabel: "Thumbs up, great!",
      cancelButtonAriaLabel: "Thumbs down",
    });
    return;
  }
  window.location = `./certificate.html`;
};

const sharPage = (link) => {
  console.log("kkkkk");
  let pageUrl = encodeURIComponent(document.URL);
  let pageTitle = encodeURIComponent(document.title);
  console.log(document.title);
  if (link === "facebook") {
    url =
      "https://www.facebook.com/sharer.php?u=" +
      pageUrl +
      "&text=" +
      "I%27m%20excited%20to%20share%20that%20I%20have%20passed%20JavaScript%20Test%20and%20got%20certified%20at%20TestMode";

    socialWindow(url, 570, 300);
  } else if (link === "twitter") {
    url =
      "https://twitter.com/intent/tweet?url=" + pageUrl + "&text=" + pageTitle;
    socialWindow(url, 570, 300);
  } else if (link === "linkedIn") {
    url = "https://www.linkedin.com/shareArticle?mini=true&url=" + pageUrl;
    socialWindow(url, 570, 570);
  } else if (link === "whatsApp") {
    url = "https://web.whatsapp.com://send?text=" + pageTitle + "%20" + pageUrl;
    socialWindow(url, 570, 450);
  } else if (link === "telegram") {
    url = "https://t.me/share/url?url=" + pageTitle + "%20" + pageUrl;
    socialWindow(url, 570, 450);
  }
};

function socialWindow(url, width, height) {
  var left = (screen.width - width) / 2;
  var top = (screen.height - height) / 2;
  var params =
    "menubar=no,toolbar=no,status=no,width=" +
    width +
    ",height=" +
    height +
    ",top=" +
    top +
    ",left=" +
    left;
  window.open(url, "", params);
}
