$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }
    });

    // <!-- emailjs to mail contact form data -->
    $(document).ready(function() {
        $("#contact-form").submit(function(event) {
          event.preventDefault(); // Prevent the default form submission
          console.log("Form submission started");
      
          emailjs.init("v_7ccXJDuXfY_6Qne"); // Replace with your EmailJS user ID
          console.log("EmailJS initialized");
      
          emailjs.sendForm('service_87o0muj', 'template_klwou98', '#contact-form') // Replace with your EmailJS service ID and template ID
            .then(function(response) {
              console.log('SUCCESS!', response.status, response.text);
              document.getElementById("contact-form").reset();
              alert("Form Submitted Successfully");
            }, function(error) {
              console.log('FAILED...', error);
              alert("Form Submission Failed! Try Again");
            });
        });
    });      
    // <!-- emailjs to mail contact form data -->

});


document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Portfolio | Keerthana M";
            $("#developer").attr("href", "assets/images/developer.jpg");
        }
        else {
            document.title = "Come Back To Portfolio";
            $("#developer").attr("href", "assets/images/keerthana.jpg");
        }
    });


async function fetchData(type = "skills") {
    let response
    type === "skills" ?
        response = await fetch("skills.json")
        :
        response = await fetch("./project/project")
    const data = await response.json();
    return data;
}

function showSkills(skills) {
    let skillsContainer = document.getElementById("skillsContainer");
    let skillHTML = "";
    skills.forEach(skill => {
        skillHTML += `
        <div class="bar">
              <div class="info">
                <img src=${skill.icon} alt="skill" />
                <span>${skill.name}</span>
              </div>
            </div>`
    });
    skillsContainer.innerHTML = skillHTML;
}


fetchData().then(data => {
    showSkills(data);
});


// Start of Tawk.to Live Chat
var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
(function () {
    var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/6656c5ba9a809f19fb368156/1hv1f8obm';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
})();
// End of Tawk.to Live Chat


/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});


/* SCROLL HOME */
srtop.reveal('.home .content h3', { delay: 200 });
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 200 });

srtop.reveal('.home .image', { delay: 400 });
srtop.reveal('.home .linkedin', { interval: 600 });
srtop.reveal('.home .github', { interval: 800 });
srtop.reveal('.home .instagram', { interval: 600 });

/* SCROLL ABOUT */
srtop.reveal('.about .content h3', { delay: 200 });
srtop.reveal('.about .content .tag', { delay: 200 });
srtop.reveal('.about .content p', { delay: 200 });
srtop.reveal('.about .content .box-container', { delay: 200 });
srtop.reveal('.about .content .resumebtn', { delay: 200 });


/* SCROLL SKILLS */
srtop.reveal('.skills .container', { interval: 200 });
srtop.reveal('.skills .container .bar', { delay: 400 });

/* SCROLL EDUCATION */
srtop.reveal('.education .box', { interval: 200 });

/* SCROLL PROJECT */
srtop.reveal('.project .timeline', { delay: 400 });
srtop.reveal('.project .timeline .container', { interval: 400 });

/* SCROLL EXPERIENCE */
srtop.reveal('.experience .timeline', { delay: 400 });
srtop.reveal('.experience .timeline .container', { interval: 400 });

/* SCROLL CONTACT */
srtop.reveal('.contact .container', { delay: 400 });
srtop.reveal('.contact .container .form-group', { delay: 400 });
