/**
 * 
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
 * 
*/
const sections = Array.from(document.querySelectorAll("section"));


const navList = document.getElementById("navbar__list");

let currentActiveSection;

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function createListSections(list , sections){
  for(let section of sections){
      let sectionName = section.getAttribute('data-nav');
      let sectionID = section.getAttribute('id');
      //creating a section element foreach section
      let sectionNavElement = document.createElement('li');
      sectionNavElement.id = "nav__" + sectionID;
      sectionNavElement.innerHTML = `<a class='list__section' href='#${sectionID}'>${sectionName}</a>`;

      list.appendChild(sectionNavElement);

  }
}



function checkActiveSection(){
    currentActiveSection = sections[0];
for(let section of sections){
    if(scrollY >= section.offsetTop - 350 ){
        currentActiveSection = section;
    }
   
}


for(let section of navList.children){
if(section.id !== "nav__" + currentActiveSection.id){
        section.firstElementChild.id = "";
    }else{
   section.firstElementChild.id ="active__section";
    }
}


}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

createListSections(navList,sections);

window.onscroll = function() {checkActiveSection()};

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


