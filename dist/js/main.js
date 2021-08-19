(function () {
  let darkMode = localStorage.getItem("darkMode");

  let enableDarkMode = () => {
    $("html").classList.add("dark");
    localStorage.setItem("darkMode", "on");
  };

  let disableDarkMode = () => {
    $("html").classList.remove("dark");
    localStorage.setItem("darkMode", null);
  };

  if (darkMode === "on") {
    enableDarkMode();
  }

  $("#btn-toggle").onclick = () => {
    darkMode = localStorage.getItem("darkMode");
    if (darkMode == "on") {
      disableDarkMode();
    } else {
      enableDarkMode();
    }
  };

  // localhost
  // const baseUrl = "http://127.0.0.1:5500/";
  // gihtub pages
  const baseUrl = "https://andikaps.github.io/";

  function $(el) {
    return document.querySelector(el);
  }

  function checkUrl() {
    let endUrl = window.location.href.split("#");

    switch (endUrl[1]) {
      case "home":
        loadPage(baseUrl + "src/pages/home.html");
        $("#home").classList.add("active-nav");
        $("#about").classList.remove("active-nav");
        $("#education").classList.remove("active-nav");
        $("#skills").classList.remove("active-nav");
        $("#work").classList.remove("active-nav");
        $("#contact").classList.remove("active-nav");
        $("#projects").classList.remove("active-nav");
        break;
      case "about":
        loadPage(baseUrl + "src/pages/about.html");
        $("#about").classList.add("active-nav");
        $("#home").classList.remove("active-nav");
        $("#education").classList.remove("active-nav");
        $("#skills").classList.remove("active-nav");
        $("#work").classList.remove("active-nav");
        $("#contact").classList.remove("active-nav");
        $("#projects").classList.remove("active-nav");
        break;
      case "education":
        loadPage(baseUrl + "src/pages/education.html");
        $("#education").classList.add("active-nav");
        $("#home").classList.remove("active-nav");
        $("#about").classList.remove("active-nav");
        $("#skills").classList.remove("active-nav");
        $("#work").classList.remove("active-nav");
        $("#contact").classList.remove("active-nav");
        $("#projects").classList.remove("active-nav");
        break;
      case "skills":
        loadPage(baseUrl + "src/pages/skills.html");
        $("#skills").classList.add("active-nav");
        $("#home").classList.remove("active-nav");
        $("#about").classList.remove("active-nav");
        $("#education").classList.remove("active-nav");
        $("#work").classList.remove("active-nav");
        $("#contact").classList.remove("active-nav");
        $("#projects").classList.remove("active-nav");
        break;
      case "work":
        loadPage(baseUrl + "src/pages/work.html");
        $("#work").classList.add("active-nav");
        $("#home").classList.remove("active-nav");
        $("#about").classList.remove("active-nav");
        $("#education").classList.remove("active-nav");
        $("#skills").classList.remove("active-nav");
        $("#contact").classList.remove("active-nav");
        $("#projects").classList.remove("active-nav");
        break;
      case "contact":
        loadPage(baseUrl + "src/pages/contact.html");
        $("#contact").classList.add("active-nav");
        $("#home").classList.remove("active-nav");
        $("#about").classList.remove("active-nav");
        $("#education").classList.remove("active-nav");
        $("#skills").classList.remove("active-nav");
        $("#work").classList.remove("active-nav");
        $("#projects").classList.remove("active-nav");
        break;
      case "projects":
        loadPage(baseUrl + "src/pages/projects.html");
        $("#projects").classList.add("active-nav");
        $("#home").classList.remove("active-nav");
        $("#about").classList.remove("active-nav");
        $("#education").classList.remove("active-nav");
        $("#skills").classList.remove("active-nav");
        $("#work").classList.remove("active-nav");
        $("#contact").classList.remove("active-nav");
        break;

      default:
        loadPage(baseUrl + "src/pages/home.html");
        $("#home").classList.add("active-nav");
        $("#about").classList.remove("active-nav");
        $("#education").classList.remove("active-nav");
        $("#skills").classList.remove("active-nav");
        $("#work").classList.remove("active-nav");
        $("#contact").classList.remove("active-nav");
        $("#projects").classList.remove("active-nav");
        break;
    }
  }

  // toggle sidebar
  const btnMenu = $("#btn-menu");
  const sideBar = $("#sidebar");
  const overlay = $(".overlay");
  btnMenu.onclick = function () {
    sideBar.classList.toggle("hidden");
    overlay.classList.remove("hidden");

    overlay.onclick = function () {
      sideBar.classList.add("hidden");
      this.classList.add("hidden");
    };
  };

  function loadPage(url) {
    const xhr = new XMLHttpRequest();
    let content = $("#content");
    xhr.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        content.innerHTML = this.responseText;
      }
    };

    xhr.open("GET", url, true);
    xhr.send();
  }
  checkUrl();

  const navs = document.querySelectorAll(".nav-item");
  navs.forEach(nav => {
    nav.onclick = () => {
      let endUrl = nav.href.split("#");
      let url = endUrl[1];
      console.log(url);

      switch (url) {
        case "home":
          loadPage(baseUrl + "src/pages/home.html");
          $("#home").classList.add("active-nav");
          $("#about").classList.remove("active-nav");
          $("#education").classList.remove("active-nav");
          $("#skills").classList.remove("active-nav");
          $("#work").classList.remove("active-nav");
          $("#contact").classList.remove("active-nav");
          $("#projects").classList.remove("active-nav");
          break;
        case "about":
          loadPage(baseUrl + "src/pages/about.html");
          $("#about").classList.add("active-nav");
          $("#home").classList.remove("active-nav");
          $("#education").classList.remove("active-nav");
          $("#skills").classList.remove("active-nav");
          $("#work").classList.remove("active-nav");
          $("#contact").classList.remove("active-nav");
          $("#projects").classList.remove("active-nav");
          break;
        case "education":
          loadPage(baseUrl + "src/pages/education.html");
          $("#education").classList.add("active-nav");
          $("#home").classList.remove("active-nav");
          $("#about").classList.remove("active-nav");
          $("#skills").classList.remove("active-nav");
          $("#work").classList.remove("active-nav");
          $("#contact").classList.remove("active-nav");
          $("#projects").classList.remove("active-nav");
          break;
        case "skills":
          loadPage(baseUrl + "src/pages/skills.html");
          $("#skills").classList.add("active-nav");
          $("#home").classList.remove("active-nav");
          $("#about").classList.remove("active-nav");
          $("#education").classList.remove("active-nav");
          $("#work").classList.remove("active-nav");
          $("#contact").classList.remove("active-nav");
          $("#projects").classList.remove("active-nav");
          break;
        case "work":
          loadPage(baseUrl + "src/pages/work.html");
          $("#work").classList.add("active-nav");
          $("#home").classList.remove("active-nav");
          $("#about").classList.remove("active-nav");
          $("#education").classList.remove("active-nav");
          $("#skills").classList.remove("active-nav");
          $("#contact").classList.remove("active-nav");
          $("#projects").classList.remove("active-nav");
          break;
        case "contact":
          loadPage(baseUrl + "src/pages/contact.html");
          $("#contact").classList.add("active-nav");
          $("#home").classList.remove("active-nav");
          $("#about").classList.remove("active-nav");
          $("#education").classList.remove("active-nav");
          $("#skills").classList.remove("active-nav");
          $("#work").classList.remove("active-nav");
          $("#projects").classList.remove("active-nav");
          break;
        case "projects":
          loadPage(baseUrl + "src/pages/projects.html");
          $("#projects").classList.add("active-nav");
          $("#home").classList.remove("active-nav");
          $("#about").classList.remove("active-nav");
          $("#education").classList.remove("active-nav");
          $("#skills").classList.remove("active-nav");
          $("#work").classList.remove("active-nav");
          $("#contact").classList.remove("active-nav");
          break;

        default:
          loadPage(baseUrl + "src/pages/home.html");
          break;
      }
    };
  });

  // momentjs
  const todayEl = $("#today");
  const today = moment().format("MMMM D");
  todayEl.innerHTML = today;
})();
