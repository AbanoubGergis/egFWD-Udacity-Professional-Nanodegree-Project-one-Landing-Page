/*
* Manipulating the DOM exercise.
* Exercise programmatically builds navigation,
* scrolls to anchors from navigation,
* and highlights section in viewport upon scrolling.
*
* Dependencies: None
*
* JS Version: ES2015/ES6
*
* JS Standard: ESlint
*
*/

/**
* Define Global Variables
*defining Sections and navigation list Global variables
*/
const navigationList = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');

/**
* End Global Variables
* Start Helper Functions
*
*/



/**
* End Helper Functions
* Begin Main Functions
*
*/
// build the nav

function navStarter () {
  var link = '';

  // starting loop over all of the sections
  for (const section of sections) {
//Extractig Id and data set navigation
    const sectionId = section.getAttribute('id');
    const sectionDataNav = section.getAttribute('data-nav');

//building and linking setions' bar
    link = link + `<li><a class="menu__link" href="#${sectionId}">${sectionDataNav}</a></li>`
};

//append all elements to the navigation list
  navigationList.innerHTML = link;
};
//execute navStarter function
navStarter();


// start smooth scrolling functions

//smooth Scrolling to anchor ID
const links = document.querySelectorAll(".navbar__menu a");

// looping over every link
// Scroll to section on link click
for (const link of links) {
  link.addEventListener("click", clicking);
  };

  // creating the function of clicking
  function clicking (e){
    e.preventDefault();
    const linkcode = this.getAttribute("href");
    const offset = document.querySelector(linkcode).offsetTop;
    scroll({top: offset,behavior: "smooth"});
};

// End smooth scrolling functions


// Start classes active function

//to implementing the activation function
const activation = () => {

// remove the active functions
  function removeActivation  (section)  {
    section.classList.remove('your-active-class');
};
  // adding the active functions
  function addActivation  (isInviewport, section)  {
    if(isInviewport){
        section.classList.add('your-active-class');
    };
  };
// looping for all section and getting dimensions
  sections.forEach(section => {
      const rect = section.getBoundingClientRect().top
      isInviewport = () => rect < 200 && rect >= -200;
// to remove activation for sanction that not inverwport
      removeActivation(section);
// to add activation for sanction that not inverwport
      addActivation(isInviewport(),section);
  });
};
//to run scrolling event
window.addEventListener('scroll' ,activation);

// End classes active function
