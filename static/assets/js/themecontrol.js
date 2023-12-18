document.addEventListener("DOMContentLoaded", function (event) {
  if (localStorage.getItem("Christmas") === "on") {
    document.body.style.background = "linear-gradient(to right, #c52e2d, #00aa4f)"; // Red to brighter green gradient
    document.body.style.color = "#ffffff"; // White
    document.body.style.setProperty("--bg-c", "linear-gradient(to right, #c52e2d, #00aa4f)"); // Red to brighter green gradient
    setThemeValue("Christmas");
  } else if (localStorage.getItem("Classic") === "on") {
    document.body.style.backgroundColor = "#111";
    document.body.style.color = "#ffffff";
    document.body.style.setProperty("--bg-c", "#111");
    setThemeValue("Classic");
  } else if (localStorage.getItem("Ocean") === "on") {
    document.body.style.backgroundColor = "#162545";
    document.body.style.color = "#ffffff";
    document.body.style.setProperty("--bg-c", "#162545");
    setThemeValue("Ocean");
  } else if (localStorage.getItem("Midnight") === "on") {
    document.body.style.backgroundColor = "#000";
    document.body.style.color = "#ffffff";
    document.body.style.setProperty("--bg-c", "#000");
    setThemeValue("Midnight");
  } else if (localStorage.getItem("Light") === "on") {
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#000000";
    document.body.style.setProperty("--bg-c", "#fff");
    setThemeValue("Light");
  }
});

function setThemeValue(theme) {
  var themeElement = document.getElementById("Themes");
  if (themeElement) {
    themeElement.value = theme;
  }
}
