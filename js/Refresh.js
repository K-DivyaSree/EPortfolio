// Code to Stay on the Same Page Even After Refreshing


// Function to get the hash value from the URL
function getHash() {
    return window.location.hash.substr(1); // Remove the '#' character
  }
  
  // Function to show the section based on the hash value
  function showSectionFromHash() {
    const hash = getHash();
    if (hash) {
      const section = document.getElementById(hash);
      if (section) {
        section.classList.add('active'); // Show the section
      }
    }
  }
  
  // Call showSectionFromHash on page load
  window.addEventListener('load', showSectionFromHash);
  
  // Function to handle hashchange event
  window.addEventListener('hashchange', showSectionFromHash);
  

//   Code to display previous page on the background

// script.js

// Function to get the last visited section ID from browser storage
function getLastVisitedSection() {
    return sessionStorage.getItem('lastVisitedSection') || '#home'; // Default to home if no section is stored
  }
  
  // Function to set the last visited section ID in browser storage
  function setLastVisitedSection(sectionId) {
    sessionStorage.setItem('lastVisitedSection', sectionId);
  }
  
  // Function to scroll to the last visited section
  function scrollToLastVisitedSection() {
    const lastVisitedSectionId = getLastVisitedSection();
    const lastVisitedSection = document.querySelector(lastVisitedSectionId);
    if (lastVisitedSection) {
      lastVisitedSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  // Call the function to scroll to the last visited section on page load
  window.addEventListener('load', scrollToLastVisitedSection);
  
  // Function to handle section link clicks
  document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', function(event) {
      const sectionId = this.getAttribute('href');
      setLastVisitedSection(sectionId);
    });
  });


// Active Section

// Function to get the last visited section ID from browser storage
function getLastVisitedSection() {
    return sessionStorage.getItem('lastVisitedSection') || '#home';
}

// Function to set the last visited section ID in browser storage
function setLastVisitedSection(sectionId) {
    sessionStorage.setItem('lastVisitedSection', sectionId);
}

// Function to scroll to the last visited section
function scrollToLastVisitedSection() {
    const lastVisitedSectionId = getLastVisitedSection();
    const lastVisitedSection = document.querySelector(lastVisitedSectionId);
    if (lastVisitedSection) {
        lastVisitedSection.scrollIntoView({ behavior: 'smooth' });
        // Remove active class from all navigation links and add it to the corresponding link
        document.querySelectorAll('.nav a').forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === lastVisitedSectionId);
        });
    }
}

// Call the function to scroll to the last visited section on page load
window.addEventListener('load', scrollToLastVisitedSection);

// Function to handle section link clicks and set the last visited section
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', function () {
        const sectionId = this.getAttribute('href');
        setLastVisitedSection(sectionId);
    });
});

  