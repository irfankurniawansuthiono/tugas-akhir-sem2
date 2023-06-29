function scrollToCourse() {
      var navbarHeight = document.querySelector('.navbar').offsetHeight;
      var courseElement = document.getElementById('course');
      var courseOffsetTop = courseElement.offsetTop - navbarHeight;

      window.scrollTo({
        top: courseOffsetTop,
        behavior: 'smooth'
      });
    }