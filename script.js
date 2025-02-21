
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });


//validation for Contact form
document.querySelector('form').addEventListener('submit', function (e) {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
  
    if (name === "" || email === "" || message === "") {
      alert("Please fill out all fields!");
      e.preventDefault();
    }
  });
  