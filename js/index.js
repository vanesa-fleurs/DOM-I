const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
const logo = document.getElementById("logo-img");
logo.src = siteContent["nav"]["img-src"];

const snippetOne = document.getElementById("cta-img");
snippetOne.src = siteContent["cta"]["img-src"];

const snippetTwo = document.getElementById("middle-img");
snippetTwo.src = siteContent ["main-content"] ["middle-img-src"];

//navigation
let navigation = document.querySelectorAll("nav a")
navigation[0].textContent = siteContent["nav"]["nav-item-1"];
navigation[1].textContent = siteContent["nav"]["nav-item-2"];
navigation[2].textContent = siteContent["nav"]["nav-item-3"];
navigation[3].textContent = siteContent["nav"]["nav-item-4"];
navigation[4].textContent = siteContent["nav"]["nav-item-5"];
navigation[5].textContent = siteContent["nav"]["nav-item-6"];

// navigation to be green...
navigation.forEach(x => {
  x.style.color = "green"
})

// for (let i=0; i<navigation.length; i++) {
//   navigation[i].style.color = "green";
// }

//prepending here//
/*create element called subHeadline*/
const newlinkA = document.createElement('a');
newlinkA.innerHTML="History";

const navtwo = document.querySelector("nav");
navtwo.prepend(newlinkA);

navigation.forEach(x => {
  newlinkA.style.color = "green";
});
//appending here//
const newlinkB = document.createElement('a');
newlinkB.innerHTML="Login";

const navthree = document.querySelector("nav");
navthree.append(newlinkB);

navigation.forEach(x => {
  newlinkB.style.color = "green";
});
//Headers
const thedomH1 = document.querySelector(".cta-text h1").innerHTML = "<h1>Dom <br> Is <br> Awesome!</h1>"
thedomH1[0].textContent = siteContent ["cta"] ["h1"];
//let section = document.querySelector('p').innerHTML = "<h1>Hello!</h1>"
// // thedomH1.textContent = "The Dom <br> Is <br> Awesome" ?
// document.querySelector(".cta-text").style.whiteSpace = 'pre';  ?


const head = document.querySelectorAll('h4');
head [0].textContent = siteContent ["main-content"] ["features-h4"];
head [1].textContent = siteContent ["main-content"] ["about-h4"];
head [2].textContent = siteContent ["main-content"] ["services-h4"];
head [3].textContent = siteContent ["main-content"] ["product-h4"];
head [4].textContent = siteContent ["main-content"] ["vision-h4"];
head [5].textContent = siteContent ["contact"] ["contact-h4"];

//paragraph texts
const paragraphs = document.querySelectorAll('p');
paragraphs [0].textContent = siteContent ["main-content"] ["features-content"];
paragraphs [1].textContent = siteContent ["main-content"] ["about-content"];
paragraphs [2].textContent = siteContent ["main-content"] ["services-content"];
paragraphs [3].textContent = siteContent ["main-content"] ["product-content"];
paragraphs [4].textContent = siteContent ["main-content"] ["vision-content"];
paragraphs [5].textContent = siteContent ["contact"] ["address"];
paragraphs [6].textContent = siteContent ["contact"] ["phone"];
paragraphs [7].textContent = siteContent ["contact"] ["email"];
paragraphs [8].textContent = siteContent ["footer"] ["copyright"];

//getstarted button
const buttonOne = document.querySelector("button");
buttonOne.textContent = siteContent["cta"]["button"]