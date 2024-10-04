// Handle form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    alert('Thank you for your message', {name});
    
    // Here you could also send form data to a server using fetch or XMLHttpRequest
  }); 
