/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particles.json', function () {
  console.log('callback - particles.js config loaded');
});

const btns = document.querySelectorAll('.js-btn');
const sections = document.querySelectorAll('.js-section');

var currentSettings = zenscroll.setup()
zenscroll.setup(currentSettings.defaultDuration, 50);

btns[0].addEventListener('click', () => {
  zenscroll.to(sections[0]);
});

btns[1].addEventListener('click', () => {
  zenscroll.to(sections[1]);
});

btns[2].addEventListener('click', () => {
  zenscroll.to(sections[2]);
});

btns[3].addEventListener('click', () => {
  zenscroll.to(sections[3]);
});

btns[4].addEventListener('click', () => {
  zenscroll.to(sections[4]);
});

btns[5].addEventListener('click', () => {
  zenscroll.to(sections[5]);
});

btns[6].addEventListener('click', () => {
  zenscroll.to(sections[6]);
});


window.onscroll = function () {
  var nav = document.getElementById('header');
  var headerH = document.getElementById('header').offsetHeight;
  var heroH = document.getElementById('hero').offsetHeight;

  var offsetHeight = heroH - (headerH * 2);

  if (window.pageYOffset > offsetHeight) {
    nav.classList.add("scroll");
  } else {
    nav.classList.remove("scroll");
  }
}

var mobileBtn = document.getElementById('mobileBtn');
mobileBtn.addEventListener('click', () => {
  document.getElementById('header').classList.toggle('open');
})

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', () => {
    document.getElementById('header').classList.remove('open');

  });
}