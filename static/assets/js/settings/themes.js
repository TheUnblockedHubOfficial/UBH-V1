document.getElementById("Themes").onchange = function () {
  if (this.value === "Classic") {
    localStorage.setItem("Christmas", "off");
    localStorage.setItem("Classic", "on");
    localStorage.setItem("Ocean", "off");
    localStorage.setItem("Midnight", "off");
    localStorage.setItem("Light", "off");
    document.body.style.backgroundColor = "#111";
    document.body.style.color = "#ffffff";
    document.body.style.setProperty("--bg-c", "#111");
  } else if (this.value === "Ocean") {
    localStorage.setItem("Christmas", "off");
    localStorage.setItem("Ocean", "on");
    localStorage.setItem("Classic", "off");
    localStorage.setItem("Midnight", "off");
    localStorage.setItem("Light", "off");
    document.body.style.backgroundColor = "#162545";
    document.body.style.color = "#ffffff";
    document.body.style.setProperty("--bg-c", "#162545");
  } else if (this.value === "Midnight") {
    localStorage.setItem("Christmas", "off");
    localStorage.setItem("Midnight", "on");
    localStorage.setItem("Classic", "off");
    localStorage.setItem("Ocean", "off");
    localStorage.setItem("Light", "off");
    document.body.style.backgroundColor = "#000";
    document.body.style.color = "#ffffff";
    document.body.style.setProperty("--bg-c", "#000");
  } else if (this.value === "Light") {
    localStorage.setItem("Christmas", "off");
    localStorage.setItem("Light", "on");
    localStorage.setItem("Midnight", "off");
    localStorage.setItem("Classic", "off");
    localStorage.setItem("Ocean", "off");
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#000000";
    document.body.style.setProperty("--bg-c", "#fff");
  } else if (this.value === "Christmas") {
    localStorage.setItem("Christmas", "on");
    localStorage.setItem("Classic", "off");
    localStorage.setItem("Ocean", "off");
    localStorage.setItem("Midnight", "off");
    localStorage.setItem("Light", "off");
    document.body.style.backgroundColor = "#c52e2d"; // Christmas Red
    document.body.style.color = "#ffffff"; // White
    document.body.style.setProperty("--bg-c", "#c52e2d"); // Christmas Red
  }
};
