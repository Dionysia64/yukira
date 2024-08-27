// Callback function to execute when intersection changes
const callback = (entries, observer) => {
  const links = (document.getElementById("menuLateral")?.querySelectorAll("li a") || document.getElementById("menuLateralInfo")?.querySelectorAll("li a")) || (document.getElementById("menuLateralItineraire")?.querySelectorAll("li a") ||  document.getElementById("menuLateralPassion")?.querySelectorAll("li a")) ||  document.getElementById("menuLateralBesoins")?.querySelectorAll("li a"); // Target links directly
  // Helper function to remove 'anchorActive' class from all links
  const removeActiveClasses = () => {
    links.forEach(link => link.classList.remove('anchorActive'));
  };

  // Helper function to add 'anchorActive' class to the target link
  const addActiveClass = (targetId) => {
    const targetLink = document.querySelectorAll(`a[href="#${targetId}"]`);
    if (targetLink) {
      links.forEach(link => {
        if (link === targetLink[1]) {
          link.classList.add('anchorActive')
        }
      });
    }
  };

  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const targetId = entry.target.id;
      addActiveClass(targetId); // Directly use target ID
    } else {
      removeActiveClasses();
    }
  });
};

// Create an intersection observer instance
const observer = new IntersectionObserver(callback, {
  root: null, // Use the viewport as the root (default)
  rootMargin: '0px',
  threshold: 0.1 // Trigger callback when 100% of the target is visible
});

// Target elements to observe (assuming class 'target-element' exists)
const targets = document.querySelectorAll('.target-element');
// Observe each target element
targets.forEach(target => {observer.observe(target)});

