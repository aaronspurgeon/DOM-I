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
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// navbar
const allLinks = document.querySelectorAll('nav a');
allLinks[0].textContent = siteContent["nav"]["nav-item-1"];
allLinks[1].textContent = siteContent["nav"]["nav-item-2"];
allLinks[2].textContent = siteContent["nav"]["nav-item-3"];
allLinks[3].textContent = siteContent["nav"]["nav-item-4"];
allLinks[4].textContent = siteContent["nav"]["nav-item-5"];
allLinks[5].textContent = siteContent["nav"]["nav-item-6"];

const nav = document.querySelector('nav');
const firstNavItem = document.createElement('a');
const lastNavItem = document.createElement('a');
firstNavItem.textContent = 'Sign In';
lastNavItem.textContent = 'Extras'
nav.prepend(firstNavItem);
nav.append(lastNavItem);


// cta section
const ctaLogo = document.getElementById('cta-img');
ctaLogo.setAttribute('src', siteContent["cta"]["img-src"]);

const ctaText = document.querySelector('.cta-text h1');
ctaText.textContent = siteContent['cta']['h1'];

const ctaBtn = document.querySelector('.cta-text button');
ctaBtn.textContent = siteContent['cta']['button'];


// middle content
const middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

const topContentTitle = document.querySelectorAll('.top-content .text-content h4');
topContentTitle[0].textContent = siteContent['main-content']['features-h4'];
topContentTitle[1].textContent = siteContent['main-content']['about-h4'];

const topContentText = document.querySelectorAll('.top-content .text-content p');
topContentText[0].textContent = siteContent['main-content']['features-content'];
topContentText[1].textContent = siteContent['main-content']['about-content'];

const btmContentTitle = document.querySelectorAll('.bottom-content .text-content h4');
btmContentTitle[0].textContent = siteContent['main-content']['services-h4'];
btmContentTitle[1].textContent = siteContent['main-content']['product-h4'];
btmContentTitle[2].textContent = siteContent['main-content']['vision-h4'];

const btmContentText = document.querySelectorAll('.bottom-content .text-content p');
btmContentText[0].textContent = siteContent['main-content']['services-content'];
btmContentText[1].textContent = siteContent['main-content']['product-content'];
btmContentText[2].textContent = siteContent['main-content']['vision-content'];


// contact

const contactTitle = document.querySelector('.contact h4');
contactTitle.textContent = siteContent['contact']['contact-h4'];

const contactText = document.querySelectorAll('.contact p');
contactText[0].textContent = siteContent['contact']['address'];
contactText[1].textContent = siteContent['contact']['phone'];
contactText[2].textContent = siteContent['contact']['email'];


// footer

const footer = document.querySelector('footer p');
footer.textContent = siteContent['footer']['copyright'];


