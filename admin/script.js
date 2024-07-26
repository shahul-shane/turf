$(document).ready(function () {
  $(".menu > ul > li > a").click(function (e) {
      e.preventDefault();
      var $parent = $(this).parent();

      // If the clicked menu item is already active, do nothing
      if ($parent.hasClass("active")) {
          return;
      }

      // Remove 'active' class from all other menu items
      $(".menu ul li").removeClass("active");
      // Close all other submenus
      $(".menu ul li ul").slideUp();
      // Add 'active' class to the clicked menu item
      $parent.addClass("active");
      // Open the submenu
      $parent.find("ul").slideDown();
  });

  $(".menu-btn").click(function () {
      // Toggle the 'active' class on the sidebar
      $(".sidebar").toggleClass("active");
  });

  // Add click event handler for submenu items
  $(".sub-menu li a").click(function (e) {
      e.stopPropagation(); // Prevent the click event from bubbling up to parent menu items
      // You can perform any additional actions for submenu items here if needed
  });
});



// https://www.linkedin.com/in/atakangk/
//jQuery time
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

$(".next").click(function(){
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	next_fs = $(this).parent().next();
	
	//activate next step on progressbar using the index of next_fs
	$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
	
	//show the next fieldset
	next_fs.show(); 
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale current_fs down to 80%
			scale = 1 - (1 - now) * 0.2;
			//2. bring next_fs from the right(50%)
			left = (now * 50)+"%";
			//3. increase opacity of next_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({
        'transform': 'scale('+scale+')',
        'position': 'absolute'
      });
			next_fs.css({'left': left, 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
	});
});

  document.getElementById('see-more-btn').addEventListener('click', function() {
    var additionalInfo = document.getElementById('additional-info');
    var icon = document.getElementById('toggle-icon');

    if (additionalInfo.classList.contains('hidden')) {
      additionalInfo.classList.remove('hidden');
      additionalInfo.style.alignItems='start';
      this.innerHTML = 'See Less <i class="icon ph-bold ph-caret-double-up" id="toggle-icon"></i>';
    } else {
      additionalInfo.classList.add('hidden');
      this.innerHTML = 'See More <i class="icon ph-bold ph-caret-double-down" id="toggle-icon"></i>';
    }
  });

  document.addEventListener('DOMContentLoaded', function() {
    const rowsPerPage = 9;
    const table = document.getElementById('booking-table');
    const pagination = document.getElementById('pagination');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const pageButtons = document.getElementById('pageButtons');
  
    let currentPage = 1;
    const totalRows = table.querySelectorAll('tbody tr').length;
    const totalPages = Math.ceil(totalRows / rowsPerPage);
  
    function displayPage(page) {
      const rows = table.querySelectorAll('tbody tr');
      rows.forEach((row, index) => {
        if (index >= (page - 1) * rowsPerPage && index < page * rowsPerPage) {
          row.style.display = '';
        } else {
          row.style.display = 'none';
        }
      });
      updatePagination(page);
    }
  
    function updatePagination(currentPage) {
      pageButtons.innerHTML = ''; // Clear existing page buttons
  
      if (totalPages > 1) {
        for (let i = 1; i <= totalPages; i++) {
          const button = document.createElement('button');
          button.textContent = i;
          button.onclick = function() {
            currentPage = i;
            displayPage(currentPage);
          };
          if (i === currentPage) {
            button.classList.add('active');
            button.style.background = "#00808054";
          } else {
            button.style.background = "#008080";
          }
          pageButtons.appendChild(button);
        }
        pagination.style.display = 'flex'; // Show pagination container
      } else {
        pagination.style.display = 'none'; // Hide pagination container if there's only one page
      }
  
      prevBtn.disabled = currentPage === 1;
      nextBtn.disabled = currentPage === totalPages;
    }
  
    function prevPage() {
      if (currentPage > 1) {
        currentPage--;
        displayPage(currentPage);
      }
    }
  
    function nextPage() {
      if (currentPage < totalPages) {
        currentPage++;
        displayPage(currentPage);
      }
    }
  
    prevBtn.addEventListener('click', prevPage);
    nextBtn.addEventListener('click', nextPage);
  
    displayPage(currentPage);
  });


  document.addEventListener('DOMContentLoaded', function() {
    const viewLinks = document.querySelectorAll('.view-link');
    const ticketShow = document.getElementById('turf-ticket-show');
    const closeTicket = document.querySelector('.close-ticket');

    viewLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            ticketShow.style.display = 'block';
        });
    });

    closeTicket.addEventListener('click', function(event) {
        event.preventDefault();
        ticketShow.style.display = 'none';
    });
});



document.addEventListener('DOMContentLoaded', function() {
  const iconLinks = document.querySelectorAll('.icon-link');

  iconLinks.forEach(iconLink => {
    iconLink.addEventListener('click', function(event) {
      event.preventDefault();

      const menu = this.nextElementSibling;

      // Check if the clicked menu is already visible
      if (menu.style.display === 'block') {
        menu.style.display = 'none';
      } else {
        // Hide all open menus
        document.querySelectorAll('.turf-booking-res-del').forEach(openMenu => {
          openMenu.style.display = 'none';
        });

        // Show the clicked menu
        menu.style.display = 'block';
      }
    });
  });

  // Hide the menu when clicking outside of it
  document.addEventListener('click', function(event) {
    if (!event.target.closest('.icon-link, .turf-booking-res-del')) {
      document.querySelectorAll('.turf-booking-res-del').forEach(menu => {
        menu.style.display = 'none';
      });
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const container = document.querySelector('.recent-ticket-container');
  const leftNav = document.getElementById('left-nav');
  const rightNav = document.getElementById('right-nav');
  const cardWidth = 250 + 30; // Width of each card plus margin

  leftNav.addEventListener('click', function (event) {
      event.preventDefault();
      container.scrollBy({
          left: -cardWidth,
          behavior: 'smooth'
      });
  });

  rightNav.addEventListener('click', function (event) {
      event.preventDefault();
      container.scrollBy({
          left: cardWidth,
          behavior: 'smooth'
      });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('.nav a[data-target]');
  const sections = document.querySelectorAll('.content > .section');
  
  // Function to show a section based on class
  function showSection(className) {
    sections.forEach(section => {
      section.classList.remove('active');
    });
    document.querySelector(`.${className}`).classList.add('active');
  }

  // Function to set the active menu item
  function setActiveMenuItem(targetClass) {
    // Remove 'active' class from all menu items
    document.querySelectorAll('.menu ul li').forEach(item => {
      item.classList.remove('active');
    });

    // Add 'active' class to the corresponding menu item
    document.querySelector(`.menu ul li a[data-target="${targetClass}"]`).parentElement.classList.add('active');
  }

  // Initially show the section based on URL hash
  const hash = window.location.hash.substring(1); // Remove the '#'
  if (hash) {
    showSection(hash);
    setActiveMenuItem(hash);
  } else {
    document.querySelector('.dashboard').classList.add('active'); // Default to dashboard if no hash
    setActiveMenuItem('dashboard');
  }

  // Add click event listener for navigation links
  links.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const targetClass = this.getAttribute('data-target');

      // Update the URL hash without reloading the page
      history.pushState(null, '', `#${targetClass}`);

      // Show the target section
      showSection(targetClass);

      // Set the active menu item
      setActiveMenuItem(targetClass);
    });
  });

  // Handle the back and forward navigation
  window.addEventListener('popstate', function() {
    const hash = window.location.hash.substring(1);
    showSection(hash || 'dashboard'); // Default to dashboard if no hash
    setActiveMenuItem(hash || 'dashboard');
  });

  // Add click event listener for buttons in .message-btn
  document.querySelectorAll('.message-btn a').forEach(button => {
    button.addEventListener('click', function(event) {
      event.preventDefault();
      const sectionId = this.getAttribute('onclick').match(/'([^']+)'/)[1]; // Extract section ID from onclick attribute

      // Show the target section
      showSection(sectionId);

      // Set the active menu item
      setActiveMenuItem(sectionId);

      // Scroll to the section
      document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });

      // Update the URL hash without reloading the page
      history.pushState(null, '', `#${sectionId}`);
    });
  });
});
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('slots-form');
  const addSlotBtn = document.getElementById('add-slot-btn');
  const slotsList = document.getElementById('slots-list');
  const startTimeInput = document.getElementById('start-time');
  const endTimeInput = document.getElementById('end-time');
  let editingSlot = null;

  // Load slots from local storage
  const savedSlots = JSON.parse(localStorage.getItem('timeSlots')) || [];
  renderSlots();

  addSlotBtn.addEventListener('click', function() {
    const startTime = startTimeInput.value;
    const endTime = endTimeInput.value;

    if (startTime && endTime) {
      if (startTime >= endTime) {
        alert('Start time should be less than end time.');
        return;
      }

      if (editingSlot) {
        // Update the slot
        editingSlot.start = startTime;
        editingSlot.end = endTime;
        editingSlot = null;
      } else {
        // Check for duplicate slot
        if (savedSlots.some(slot => slot.start === startTime && slot.end === endTime)) {
          alert('This slot already exists.');
          return;
        }

        // Add new slot
        savedSlots.push({ start: startTime, end: endTime });
      }

      // Save slots to local storage and render them
      saveSlotsToLocalStorage();
      renderSlots();

      startTimeInput.value = '';
      endTimeInput.value = '';
    } else {
      alert('Please enter both start and end times.');
    }
  });

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Simulate publishing the slots
    alert('Slots published successfully!');

    // Optionally send the data to the server via AJAX here
  });

  function renderSlots() {
    // Clear the current list
    slotsList.innerHTML = '';

    // Sort slots by start time
    savedSlots.sort((a, b) => {
      return a.start.localeCompare(b.start);
    });

    // Render the sorted slots
    savedSlots.forEach(slot => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        ${slot.start} - ${slot.end}
        <button type="button" class="edit-slot-btn"><i class="icon ph-bold ph-pencil-simple"></i></button>
        <button type="button" class="remove-slot-btn"><i class="icon ph-bold ph-trash"></i></button>
      `;
      slotsList.appendChild(listItem);

      listItem.querySelector('.edit-slot-btn').addEventListener('click', () => editSlot(slot, listItem));
      listItem.querySelector('.remove-slot-btn').addEventListener('click', () => removeSlot(slot, listItem));
    });
  }

  function editSlot(slot, listItem) {
    startTimeInput.value = slot.start;
    endTimeInput.value = slot.end;
    editingSlot = slot;
  }

  function removeSlot(slot, listItem) {
    const index = savedSlots.indexOf(slot);
    if (index !== -1) {
      savedSlots.splice(index, 1);
    }
    slotsList.removeChild(listItem);

    // Save updated slots to local storage
    saveSlotsToLocalStorage();
  }

  function saveSlotsToLocalStorage() {
    localStorage.setItem('timeSlots', JSON.stringify(savedSlots));
  }
});