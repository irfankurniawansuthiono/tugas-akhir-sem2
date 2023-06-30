// scroll home
function scrollToHome() {
    var navbarHeight = document.querySelector('.navbar').offsetHeight;
    var homeElement = document.getElementById('home');
    var homeOffsetTop = homeElement.offsetTop - navbarHeight;

    window.scrollTo({
        top: homeOffsetTop,
        behavior: 'smooth'
    });
}
// scroll about
function scrollToAbout() {
    var navbarHeight = document.querySelector('.navbar').offsetHeight;
    var aboutElement = document.getElementById('about');
    var aboutOffsetTop = aboutElement.offsetTop - navbarHeight;

    window.scrollTo({
        top: aboutOffsetTop,
        behavior: 'smooth'
    });
}
// scroll course
function scrollToCourse() {
    var navbarHeight = document.querySelector('.navbar').offsetHeight;
    var courseElement = document.getElementById('course');
    var courseOffsetTop = courseElement.offsetTop - navbarHeight;

    window.scrollTo({
        top: courseOffsetTop,
        behavior: 'smooth'
    });
}
// scroll contact
function scrollToContact() {
    var navbarHeight = document.querySelector('.navbar').offsetHeight;
    var contactElement = document.getElementById('contact');
    var contactOffsetTop = contactElement.offsetTop - navbarHeight;

    window.scrollTo({
        top: contactOffsetTop,
        behavior: 'smooth'
    });
}
