@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

const setObj = function(key, obj) {
    localStorage.setItem(key, JSON.stringify(obj))
}
const getObj = function(key) {
    return JSON.parse(localStorage.getItem(key))
}

function loadcustomapp() {
    if (!getObj("customapps")) {
        setObj("customapps", [])
    }
    var name = prompt("What should this app be named? (required)")
    var url = prompt("What's this app's url? (required)")
    var icon = prompt("What's this app's icon? (optional)")
    var description = prompt("What's this app's description? (optional)")
   

    if (!name || !url) return alert("All required fields must be filled in")
    if (name.length > 15) return alert("App name is too long (max 30 characters)")

    
    fetch("https://www.uuidtools.com/api/generate/v4")
    .then(response => response.json())
    .then(data => {
        var customapps = getObj("customapps")
        customapps.push(JSON.parse(`{ "title": "${name} (Custom app)", "url": "${url}", "id": "${data[0]}", "image": "${icon}", "description": "${description}" }`))
        setObj("customapps", customapps)
        window.location.href = self.location
    })
    
    
    
    
    
}

function loadcustomgame() {
    if (!getObj("customgames")) {
        setObj("customgames", [])
    }
    var name = prompt("What should this game be named? (required)")
    var url = prompt("What's this game's url? (required)")
    var icon = prompt("What's this game's icon? (optional)")
    var description = prompt("What's this game's description? (optional)")

    if (!name || !url) return alert("All required fields must be filled in")
    if (name.length > 15) return alert("Game name is too long (max 30 characters)")

    
    fetch("https://www.uuidtools.com/api/generate/v4")
    .then(response => response.json())
    .then(data => {
        var customgames = getObj("customapps")
        customgames.push(JSON.parse(`{ "title": "${name} (Custom game)", "url": "${url}", "id": "${data[0]}", "image": "${icon}", "description": "${description}" }`))
        setObj("customapps", customgames)
        window.location.href = self.location
    })
    
    
}

function debug() {
    console.log(getObj("customapps"))
}

function clearcustomapps() {
    setObj("customapps", [])
    console.log("Removed all custom apps!")
}

function clearcustomgames() {
    setObj("customgames", [])
    console.log("Removed all custom games!")
}

// https://www.google.com/search?q=
function search(input, template) {
    try {
      // input is a valid URL:
      // eg: https://example.com, https://example.com/test?q=param
      return new URL(input).toString();
    } catch (err) {
      // input was not a valid URL
    }
  
    try {
      // input is a valid URL when http:// is added to the start:
      // eg: example.com, https://example.com/test?q=param
      const url = new URL(`http://${input}`);
      // only if the hostname has a TLD/subdomain
      if (url.hostname.includes(".")) return url.toString();
    } catch (err) {
      // input was not valid URL
    }
  
    // input may have been a valid URL, however the hostname was invalid
  
    // Attempts to convert the input to a fully qualified URL have failed
    // Treat the input as a search query
    return `https://www.google.com/search?q=${encodeURIComponent(input)}`
  }

  const cursor1 = document.createElement("div")
  const cursor2 = document.createElement("div")


  /*
<div class="curzr" hidden>
  <div class="curzr-dot"></div>
</div>
  */
  
    class RingDot {
        constructor() {
        this.root = document.body
        this.cursor = document.querySelector(".curzr")
        this.dot = document.querySelector(".curzr-dot")
    
        this.pointerX = 0
        this.pointerY = 0
        this.cursorSize = 22.8
    
        this.cursorStyle = {
            boxSizing: 'border-box',
            position: 'fixed',
            display: 'flex',
            top: `${ this.cursorSize / -2 }px`,
            left: `${ this.cursorSize / -2 }px`,
            zIndex: '2147483647',
            justifyContent: 'center',
            alignItems: 'center',
            width: `${ this.cursorSize }px`,
            height: `${ this.cursorSize }px`,
            backgroundColor: '#fff0',
            boxShadow: '0 0 0 1.25px #111920, 0 0 0 2.25px #F2F5F8',
            borderRadius: '50%',
            transition: '200ms, transform 66ms',
            userSelect: 'none',
            pointerEvents: 'none'
        }
    
        this.dotStyle = {
            boxSizing: 'border-box',
            position: 'fixed',
            zIndex: '2147483647',
            width: '4px',
            height: '4px',
            backgroundColor: '#111920',
            boxShadow: '0 0 0 1px #F2F5F8',
            borderRadius: '50%',
            userSelect: 'none',
            pointerEvents: 'none',
        }
    
        this.init(this.cursor, this.cursorStyle)
        this.init(this.dot, this.dotStyle)
        }
    
        init(el, style) {
        Object.assign(el.style, style)
        this.cursor.removeAttribute("hidden")
        
        document.body.style.cursor = 'none'
        document.body.querySelectorAll("button, label, input, textarea, select, a").forEach((el) => {
            el.style.cursor = 'inherit'
        })
        }
    
        move(event) {
        if (event.target.localName === 'button' || 
            event.target.localName === 'a' || 
            event.target.onclick !== null ||
            event.target.className.includes('curzr-hover')) {
            this.hover(40)
        } else {
            this.hoverout()
        }
        
        this.pointerX = event.pageX + this.root.getBoundingClientRect().x
        this.pointerY = event.pageY + this.root.getBoundingClientRect().y
        
        this.cursor.style.transform = `translate3d(${this.pointerX}px, ${this.pointerY}px, 0)`
        }
    
        hover(radius) {
        this.cursor.style.width = this.cursor.style.height = `${radius}px`
        this.cursor.style.top = this.cursor.style.left = `${radius / -2}px`
        }
    
        hoverout() {
        this.cursor.style.width = this.cursor.style.height = `${this.cursorSize}px`
        this.cursor.style.top = this.cursor.style.left = `${this.cursorSize / -2}px`
        }
    
        click() {
        this.cursor.style.transform += ` scale(0.75)`
        setTimeout(() => {
            this.cursor.style.transform = this.cursor.style.transform.replace(` scale(0.75)`, '')
        }, 35)
        }
    
        remove() {
        this.cursor.remove()
        this.dot.remove()
        }
    }
    
    (() => {
        const cursor = new RingDot()
        if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        document.onmousemove = function (event) {
            cursor.move(event)
        }
        document.onclick = function () {
            cursor.click()
        }
        } else {
        cursor.remove()
        }
    })()

    !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
    posthog.init('phc_6sob80p3H8f1WYN9PxniGg6HOrjEjCu6spLcawcGohf',{api_host:'/sf'})