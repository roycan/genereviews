/**
 * Responsive enhancements for GeneReviews mirrored content
 * This script adds mobile-friendly features to the mirrored pages
 */

// Add a back-to-top button to all pages
document.addEventListener('DOMContentLoaded', function() {
  // Create the back-to-top button
  const backToTopBtn = document.createElement('a');
  backToTopBtn.id = 'back-to-top-btn';
  backToTopBtn.href = '#';
  backToTopBtn.innerText = '↑';
  backToTopBtn.title = 'Back to top';
  backToTopBtn.setAttribute('aria-label', 'Back to top');
  document.body.appendChild(backToTopBtn);
  
  // Show/hide the button based on scroll position
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      backToTopBtn.style.display = 'block';
    } else {
      backToTopBtn.style.display = 'none';
    }
  });
  
  // Scroll to top when clicked
  backToTopBtn.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // Make tables responsive by wrapping them in a container
  const tables = document.querySelectorAll('table');
  tables.forEach(function(table) {
    // Skip tables that are already in a container
    if (table.parentElement.classList.contains('table-container')) {
      return;
    }
    
    // Create a container div
    const tableContainer = document.createElement('div');
    tableContainer.classList.add('table-container');
    
    // Replace the table with the container
    table.parentNode.insertBefore(tableContainer, table);
    tableContainer.appendChild(table);
  });
  
  // Add touch-friendly navigation for mobile
  enhanceMobileNavigation();
});

// Function to enhance navigation for mobile devices
function enhanceMobileNavigation() {
  // Make alphabetical index at the top of GeneReviews more touch-friendly
  const indexLinks = document.querySelectorAll('ul.simple-list.toc > p > a');
  indexLinks.forEach(function(link) {
    link.style.padding = '5px';
    link.style.margin = '2px';
    link.style.display = 'inline-block';
  });
  
  // Add responsive classes to search forms on small screens
  if (window.innerWidth <= 768) {
    // Make search forms stack vertically on mobile
    const searchForms = document.querySelectorAll('.search_form, .bk_search');
    searchForms.forEach(function(form) {
      form.style.display = 'flex';
      form.style.flexDirection = 'column';
    });
  }
}