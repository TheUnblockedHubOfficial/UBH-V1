console.log(localStorage.getItem("cloaking"))
if (window.top !== window.self) {
   
} else if (localStorage.getItem("cloaking") == "enabled" || !localStorage.getItem("cloaking")) {
    document.querySelector("html").innerHTML = `
    <!DOCTYPE html>
<html lang=en>
  <meta charset=utf-8>
  <meta name=viewport content="initial-scale=1, minimum-scale=1, width=device-width">
  <title>Error 404 (Not Found)!!1</title>
  <style>
    *{margin:0;padding:0}html,code{font:15px/22px arial,sans-serif}html{background:#fff;color:#222;padding:15px}body{margin:7% auto 0;max-width:390px;min-height:180px;padding:30px 0 15px}* > body{background:url(//www.google.com/images/errors/robot.png) 100% 5px no-repeat;padding-right:205px}p{margin:11px 0 22px;overflow:hidden}ins{color:#777;text-decoration:none}a img{border:0}@media screen and (max-width:772px){body{background:none;margin-top:0;max-width:none;padding-right:0}}#logo{background:url(//www.google.com/images/branding/googlelogo/1x/googlelogo_color_150x54dp.png) no-repeat;margin-left:-5px}@media only screen and (min-resolution:192dpi){#logo{background:url(//www.google.com/images/branding/googlelogo/2x/googlelogo_color_150x54dp.png) no-repeat 0% 0%/100% 100%;-moz-border-image:url(//www.google.com/images/branding/googlelogo/2x/googlelogo_color_150x54dp.png) 0}}@media only screen and (-webkit-min-device-pixel-ratio:2){#logo{background:url(//www.google.com/images/branding/googlelogo/2x/googlelogo_color_150x54dp.png) no-repeat;-webkit-background-size:100% 100%}}#logo{display:inline-block;height:54px;width:150px}
  </style>
  <a href=//www.google.com/><span id=logo aria-label=Google></span></a>
  <p><b>404.</b> <ins>That’s not an error.<br> This page is just to notify people about this new change. (This page will go away in a few days) <br>Click the \` key to continue to Art Class!<br>You can disable or enable this in Settings.</ins>
  <p>The requested URL <code>${window.location.pathname}</code> was not found on this server.  <ins>That’s all we know.</ins>

 document.addEventListener("keydown", (event) => {
    if (event.key !== `${localStorage.getItem("cloakkey") || '`'}`) return
    blank()
 })
}

function blank() {
    const url = location.href;
    const width = window.innerWidth;
    const height = window.innerHeight;
  
    let inFrame;
  
    try {
      inFrame = window !== top;
    } catch (e) {
      inFrame = true;
    }
  
    if (!inFrame && !navigator.userAgent.includes("Firefox")) {
        const popup = window.open('about:blank', '_blank');  
      if (!popup || popup.closed) {
        alert("Unable to launch! Make sure you have pop-ups or redirects enabled in your browser.");
      } else {
        const doc = popup.document;
        const iframe = doc.createElement("iframe");
        const style = iframe.style;
        const link = doc.createElement("link");
  
  
        iframe.src = url;
        style.position = "fixed";
        style.top = style.bottom = style.left = style.right = 0;
        style.border = style.outline = "none";
        style.width = style.height = "100%";
  
        doc.head.appendChild(link);
        doc.body.appendChild(iframe);
        //window.location.replace("https://classroom.google.com");
      }
    }
  }
  
