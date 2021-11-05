//! DOM Elements

const time =document.getElementById("time");
const greeting=document.getElementById("greeting");
const name=document.getElementById("name");
const focus=document.getElementById("focus");

//! Show Time
function showTime(){
    let today=new Date(2019, 06, 10, 10, 33, 30);
    // let today=new Date(),
    hour=today.getHours(),
    min=today.getMinutes(),
    sec=today.getSeconds();

    //! Set AM or PM
    const amPm=hour>=12 ? "PM" : "AM";

    //! 12hr Format

    hour=hour%12 || 12;

    //! Output Time
    time.innerHTML=`${hour}<span>:</span>${addZeros(min)}<span>:</span>${addZeros(sec)} ${amPm}`;

    setTimeout(showTime, 1000);

}

/* dakika ve saniye 10'dan küçükken 1,2 diye yazılıyordu biz bunların başına sıfır getirerek yazdırdık aşağıdaki fonksiyonda.
parseInt(n,10)) demek n sayısını onluk tabanda yaz demek. 2 lik ve 16 lık tabanlarda da yazılabilir. Hiç bir şey yazmasaydık parseInt(n) direkt onluk taban olacaktı.*/
function addZeros(n){
    return (parseInt(n,10) < 10 ? "0" : "")+n;
}


// ! set background and greeting
function setBgGreet(){
    let today=new Date(2019, 06, 10, 10, 33, 30);
    // let today=new Date(),
    hour=today.getHours();
    if(hour<12){
        //! Morning
        document.body.style.backgroundImage="url(/photos/sunrise2.jpg)"
        document.body.style.backgroundSize="cover"
        greeting.textContent="Good Morning";
    }
    else if(hour<18){
        //! Afternoon
        document.body.style.backgroundImage="url(/photos/afternoon.jpg)"
        document.body.style.backgroundSize="cover"
        document.body.style.backgroundPosition="center"
        greeting.textContent="Good Afternoon"
        document.body.style.color="rgb(203,131,58)";
    }
    else{
        //! Night
        document.body.style.backgroundImage="url(/photos/night.jpg)"
        document.body.style.backgroundSize="cover"
        document.body.style.backgroundPosition="center"
        greeting.textContent="Good Night"
        document.body.style.color="white";
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
function setName(e){
    if (e.type==="keypress") {
        //! make sure enter is pressed
        if (e.which == 13 || e.keyCode==13){
            localStorage.setItem("name", e.target.innerText);
            name.blur();
        }
        
    } else if ( e.keyCode!==13 && localStorage.getItem("name")===null || name.textContent!==localStorage.getItem("name")) {
        
        alert("Enter' a basınız !!!")
    }}
    


//! Get Name
function getName(){
  
    if (localStorage.getItem("name")===null){
        name.textContent="[Enter Name]"
    }
    else{
        name.textContent=localStorage.getItem("name");
    }   
}

//! Set Focus
function setFocus(e){
    if (e.type==="keypress") {
        //! make sure enter is pressed
        if (e.which == 13 || e.keyCode==13){
            localStorage.setItem("focus", e.target.innerText);
            focus.blur();
        }
    } else if ( e.keyCode!==13 && localStorage.getItem("focus")===null || focus.textContent!==localStorage.getItem("focus")) {
        
        alert("Enter' a basınız !!!")
}
}

//! Get Focus
function getFocus(){
  
    if (localStorage.getItem("focus")===null){
        focus.textContent="[Enter Name]"
    }
    else{
        focus.textContent=localStorage.getItem("focus");
    }   
}

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);
focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);

//! run 
showTime();
setBgGreet();
getName();
getFocus();