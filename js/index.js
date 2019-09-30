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
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//All Images

const circle = document.getElementById('cta-img');
circle.setAttribute('src', siteContent['cta'] ['img-src'])

const code_snippets = document.getElementById('middle-img');
code_snippets.setAttribute('src', siteContent['main-content'] ['middle-img-src']);

// Title 

const title = document.querySelector('h1');
title.textContent = 'DOM is Awesome';

//Button

const button = document.querySelector('button');
button.textContent = 'Get Started';

// Nav

const navigation = document.querySelectorAll('a');
navigation[0].textContent = siteContent ['nav']['nav-item-1'];
navigation[1].textContent = siteContent ['nav']['nav-item-2'];
navigation[2].textContent = siteContent ['nav']['nav-item-3'];
navigation[3].textContent = siteContent ['nav']['nav-item-4'];
navigation[4].textContent = siteContent ['nav']['nav-item-5'];
navigation[5].textContent = siteContent ['nav']['nav-item-6'];

//Change nav color to green 

Array.from(navigation)
Array.from(navigation).forEach((link)=> {
  link.style.color ='green';
})

// or do this, it works too 

// navigation[0].style.color ='green';





//h4 subtitles

const subtitles = document.querySelectorAll('.text-content h4');
subtitles[0].textContent = "Features";
subtitles[1].textContent = "About";
subtitles[2].textContent = "Services";
subtitles[3].textContent = "Product";
subtitles[4].textContent = "Vision";


// all p 

const paragraphs = document.querySelectorAll('.text-content p');
paragraphs[0].textContent = siteContent['main-content'] ['features-content'];
paragraphs[1].textContent = siteContent['main-content'] ['about-content'];
paragraphs[2].textContent = siteContent['main-content'] ['services-content'];
paragraphs[3].textContent = siteContent['main-content'] ['product-content'];
paragraphs[4].textContent = siteContent['main-content'] ['vision-content'];


//contact and Info 

const contact = document.querySelector('.contact h4');
contact.innerHTML = siteContent['contact'] ['contact-h4'];

const info = document.querySelectorAll('.contact p');
info[0].innerHTML = siteContent['contact'] ['address'];
info[1].innerHTML = siteContent['contact'] ['phone'];
info[2].innerHTML = siteContent['contact'] ['email'];




//copyright 
const copy = document.querySelector('footer p');
copy.textContent = 'Copyright Great Idea! 2018';


// Item Creation Step 1: create a new element
const newText = document.createElement("a");
// Item Creation Step 2: add some content to the newly created div
newText.textContent = "prepend";
// Item Creation Step 3: prepend or append the element to an existing DOM node on the page
const parentContent = document.querySelector('nav');
parentContent.prepend(newText);


const newAnchor = document.createElement('a');
newAnchor.textContent = "apprendChild";

const newParent = document.querySelector('nav');
newParent.appendChild(newAnchor);


