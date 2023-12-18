document.addEventListener("DOMContentLoaded", function (event) {
  if (localStorage.getItem("Classic") === "on") {
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
    document.body.style.color = "#000";
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
