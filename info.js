//! DOM Elements

const time = document.getElementById("time");
const greeting = document.getElementById("greeting");
const name = document.getElementById("name");
const focus = document.getElementById("focus");

//! Show Time
function showTime() {
    // let today = new Date(2019, 06, 10, 19, 33, 30);
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    //! Set AM or PM
    const amPm = hour >= 12 ? "PM" : "AM";

    //! 12hr Format

    hour = hour % 12 || 12;

    //! Output Time
    time.innerHTML = `${hour}<span>:</span>${addZeros(min)} ${amPm}`;
    {/* <span>:</span>${addZeros(sec) */ }
    setTimeout(showTime, 1000);

}

/* dakika ve saniye 10'dan küçükken 1,2 diye yazılıyordu biz bunların başına sıfır getirerek yazdırdık aşağıdaki fonksiyonda.
parseInt(n,10)) demek n sayısını onluk tabanda yaz demek. 2 lik ve 16 lık tabanlarda da yazılabilir. Hiç bir şey yazmasaydık parseInt(n) direkt onluk taban olacaktı.*/
function addZeros(n) {
    return (parseInt(n, 10) < 10 ? "0" : "") + n;
}


// ! set background and greeting
function setBgGreet() {
    // let today = new Date(2019, 06, 10, 19, 33, 30);
    let todayDate = new Date(),
        hour = todayDate.getHours();
    console.log(`hour:${hour}`);
    if (hour < 12) {
        //! Morning
        function photo() {
            setTimeout(function () {
                document.body.style.backgroundImage = "url(./photos/sunrise2.jpg)"
                document.body.style.backgroundSize = "cover"
            }, 4000);
            setTimeout(function () {
                document.body.style.backgroundImage = "url(./photos/morning2.jpg)"
                document.body.style.backgroundSize = "cover"
            }, 8000);
            setTimeout(function () {
                document.body.style.backgroundImage = "url(./photos/morning3.jpg)"
                document.body.style.backgroundSize = "cover"
                document.body.style.backgroundPosition = "center"
            }, 12000);
            setTimeout(photo, 12000);
        }
        photo();

        greeting.textContent = "Good Morning";
    }
    else if (hour < 18) {
        //! Afternoon
        function photo() {
            setTimeout(function () {
                document.body.style.backgroundImage = "url(./photos/afternoon.jpg)"
                document.body.style.backgroundSize = "cover"
            }, 4000);
            setTimeout(function () {
                document.body.style.backgroundImage = "url(./photos/afternoon2.jpg)"
                document.body.style.backgroundSize = "cover"
            }, 8000);
            setTimeout(function () {
                document.body.style.backgroundImage = "url(./photos/afternoon3.jpg)"
                document.body.style.backgroundSize = "cover"
                document.body.style.backgroundPosition = "center"
            }, 12000);
            setTimeout(photo, 12000);
        }
        photo();
        // document.body.style.backgroundImage="url(./photos/afternoon.jpg)"
        // document.body.style.backgroundSize="cover"
        // document.body.style.backgroundPosition="center"
        greeting.textContent = "Good Afternoon"
        document.body.style.color = "rgb(203,131,58)";
    }
    else {
        //! Night
        function photo() {
            setTimeout(function () {
                document.body.style.backgroundImage = "url(./photos/night.jpg)"
                document.body.style.backgroundSize = "cover"
                document.body.style.backgroundPosition = "center"
                document.body.style.color = "white";
            }, 4000);
            setTimeout(function () {
                document.body.style.backgroundImage = "url(./photos/night2.jpg)"
                document.body.style.backgroundSize = "cover"
                document.body.style.backgroundPosition = "center"
                document.body.style.color = "white";
            }, 8000);
            setTimeout(function () {
                document.body.style.backgroundImage = "url(./photos/night3.jpg)"
                document.body.style.backgroundSize = "cover"
                document.body.style.backgroundPosition = "center"
                document.body.style.color = "white";
            }, 12000);
            setTimeout(photo, 12000);
        }
        photo();

        greeting.textContent = "Good Night"

    }
}

/*Local storage: browserın  sahip olduğu depolama alanı. 5MB lık bir boyutu var, buraya yazılanlar otamatik stringe çevrilir,
localde depolanan veriler aynı siteyi başka bir sekmede açsan dahi değişmez Bir de session storage vardır. 
Session storage da ise veriler aynı siteyi başka sekmede açtığında gider.
Hem local hem de session da geçerli komutlardan bahsedelim:
setItem("name", "deneme"): bu komutta name değişkenine deneme ismi atanmış olur.
getItem("name") name değişkenin içeriği getirilir.
removeItem("name") name değişkenin içeri silinir.
clear ise bütün değişkenleri siler */

//! Set Name
function setName(e) {
    if (e.type === "keypress") {
        //! make sure enter is pressed
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem("name", e.target.innerText);
            name.blur();
        }

    } else if (e.keyCode !== 13 && localStorage.getItem("name") === null || name.textContent !== localStorage.getItem("name")) {

        alert("Press the Enter Button !!!")
    }
}

/* e.type==="keypress ile name alanında herhangi bir tuşa basılıp basılmadığı sorgulanıyor tabi biz bu sırada metnimizi giriyoruz ama 
bir altındaki e.which == 13 || e.keyCode==13(bazı browserlar .which desteklemediği için .keyCode kullandık) ile enter tuşuna basılıp basılmadığı sorgulanıyor.
name.blur() ile bir alt satıra geçmenin önüne geçip orayı focuslaştırmamış oluyoruz.
else if ile belirtilen konumda ise enter tuşuna basılmadığıysa ve localde ki veri null ise yani yoksa veya ekranda girilen veri localdeki veriye eşit değilse 
aslında son eşitlikte ki amaç şu bir local de olan veriyi sonradan değiştirdiğimizde ama enter tuşuna basmazsak da bize alert vermesini sağlamak.*/

//! Get Name
function getName() {

    if (localStorage.getItem("name") === null) {
        name.textContent = "[Enter Name]"
    }
    else {
        name.textContent = localStorage.getItem("name");
    }
}

//! Set Focus
function setFocus(e) {
    if (e.type === "keypress") {
        //! make sure enter is pressed
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem("focus", e.target.innerText);
            focus.blur();
        }
    } else if (e.keyCode !== 13 && localStorage.getItem("focus") === null || focus.textContent !== localStorage.getItem("focus")) {

        alert("Press the Enter Button !!!")
    }
}

//! Get Focus
function getFocus() {

    if (localStorage.getItem("focus") === null) {
        focus.textContent = "[Enter Name]"
    }
    else {
        focus.textContent = localStorage.getItem("focus");
    }
}
/* addEventListener ile bir elemente (burada name ve focusdur bunlar) olay dinleyicisi eklemek demektir. 
Yani seçilen elementte bir event (olay, burada kullanılan olaylar keypress ve blur) dinleneceği ve bu olay (event) tetiklendiğinde 
hangi fonksiyonun çalışacağı belirlenir.
keypress eventi: name/focus elementi için kullanıcı klavyeden herhangi bir tuşa bastığında geçerli olur ve setName/setFocus fonksiyonunu çalıştırır.
blur eventi: name/focus elementi için kullanıcının veri girdiği yerlerdeki odaklamayı(focus) kaldırır tabi setName/setFocus fonksiyonlarında 
click, maouseup, mousedown, mouseover, mouseout, mousemove, dblclick, keyup, keydown gibi eventlerde vardır.*/
name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);
focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);

//! run 
showTime();
setBgGreet();
getName();
getFocus();
