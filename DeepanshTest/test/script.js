const diamondContainer = document.querySelector('.diamond-container');
diamondContainer.addEventListener('wheel', (event) => {
  event.preventDefault();
  diamondContainer.scrollLeft += event.deltaY;
});
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get the entered email value
    var email = document.getElementById('email-input').value;
  
    // Perform your desired action with the email value (e.g., send it to a server, display a success message, etc.)
    console.log('Email submitted:', email);
  
    // Reset the form after submission
    document.getElementById('signup-form').reset();
  });

  const items = document.querySelectorAll('.item');
const viewDetailsBtns = document.querySelectorAll('.view-details-btn');

viewDetailsBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    items.forEach((item, i) => {
      item.classList.remove('zoomed');
      item.classList.remove('shrunk');
      if (i === index) {
        item.classList.add('zoomed');
      } else {
        item.classList.add('shrunk');
        if (i < index) {
          item.classList.add('left');
        } else {
          item.classList.add('right');
        }
      }
    });
    setTimeout(() => {
      items.forEach((item) => {
        item.classList.remove('left');
        item.classList.remove('right');
      });
    }, 300);
  });
});
