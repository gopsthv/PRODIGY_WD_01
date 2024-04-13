window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = '#555';
  } else {
    navbar.style.backgroundColor = '#333';
  }
});

const menuItems = document.querySelectorAll('.navbar ul li a');

menuItems.forEach(item => {
  item.addEventListener('mouseover', function() {
    this.style.color = '#ff7f50';
  });

  item.addEventListener('mouseout', function() {
    this.style.color = '#fff';
  });
});
