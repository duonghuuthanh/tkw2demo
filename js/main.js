function giai() {
    let a = parseFloat(document.getElementById("aId").value);
    let b = parseFloat(document.getElementById("bId").value);

    let k = "";
    if (a == 0)
      if (b == 0) 
        k = "VO SO NGHIEM";
      else 
        k = "VO NGHIEM";
    else 
        k = "NGHIEM X = " + -b / a;

    let d = document.getElementById("kq");
    d.innerHTML = `<h1 style="color:gold">${k}</h1>`
  }

  function doiMauNen() {
    let c = document.getElementById("color");
    let b = document.getElementById("main");
    //b.style.backgroundColor = c.value;
    b.setAttribute("style", `background-color:${c.value}`)
    b.getAttribute("style")
  }

  function init() {
    loadClock()

    $(".thumbnail img").click(function() {
        doiAnh(this);
    })
    // let images = document.querySelectorAll(".thumbnail img")
    // for (let i = 0; i < images.length; i++)
    //     images[i].addEventListener("click", function() {
    //         doiAnh(this)
    //     })
  }

  function loadClock() {
    let d = new Date()
    let m = `${d.getDate()}/${d.getMonth()}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
    let c = document.getElementById("clock")
    c.innerText = m
    setInterval(function() {
        d = new Date()
        m = `${d.getDate()}/${d.getMonth()}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
        c.innerText = m
    }, 1000)
  }

  function doiAnh(obj) {
    let im = document.getElementById("mainImg");
    im.src = obj.src;
  }

  function doiMauAnh(prefix) {
    let im = document.getElementById("mainImg");
    im.src = `images/galaxys8/${prefix}1.jpg`;

    let images = document.querySelectorAll(".thumbnail img");
    for (let i = 0; i < images.length; i++)
      images[i].src = `images/galaxys8/${prefix}${i + 1}.jpg`;
  }

  let timer = null;
  let to = 0;
    let le = 0;
  function play() {
    
    let incx = 5;
    let incy = 6;
    let b = document.getElementById("ball");
    let m = document.getElementById("myBall");
    timer = setInterval(function() {
        if (to < 0 || to + b.offsetHeight >= m.offsetHeight)
            incy = -incy;
        if (le < 0 || le + b.offsetWidth >= m.offsetWidth)
            incx = -incx;

        to += incy;
        le += incx;

        b.style.left = le + "px";
        b.style.top = to + "px";
    }, 10)
  }

  function stop() {
    if (timer != null)
        clearInterval(timer);
  }

  $(document).ready(function() {
    $("#show").click(function() {
        $("#ball2").fadeTo(3000, 1, function() {
            $("body").css("background-color", "white")
        })
    })
    

    $("#hide").click(function() {
        $("#ball2").fadeTo(3000, 0.2, function() {
            $("body").css("background-color", "gold")
        })
    })

    $("#animate").click(function() {
        $("#ball2").animate({
            "left": "500px",
            "width": "200px"
        }, 3000, function() {
            $("body").css("background-color", "green")
        }).animate({
            "top": "400px",
            "width": "300px"
        }, 3000).animate({
            "top": "0",
            "left": "0",
            "width": "128px"
        }, 3000)
    })

    $("#btncolors").on("click", "button", function() {
        let c = $(this).css("background-color")
        $("body").css("background-color", c)
    })
    $("#btncolors > button").on({
        mouseenter: function() {
            $(this).css("border", "2px solid red")
        },
        mouseleave: function() {
            $(this).css("border", "none")
        }
    })
    // $("#btncolors > button").click(function() {
    //     let c = $(this).css("background-color")
    //     $("body").css("background-color", c)
    // })

    $("#color").change(function() {
        let c = $(this).val()
        let btn = `<button style="background-color: ${c}"></button>`
        $("#btncolors").append(btn)
    })

    $(window).scroll(function() {
        console.info($(this).scrollTop())
    })

    $("a.go").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1000)
    })
  })