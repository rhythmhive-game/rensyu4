console.log("JS動いてる");

window.addEventListener('load', function () {
    var $button = document.querySelector('.toggle-menu-button');
    var $menu = document.querySelector('.header-site-menu');
    $button.addEventListener('click', function () {
        if ($menu.classList.contains('is-show')) {
            $menu.classList.remove('is-show');
        }
        else {
            $menu.classList.add('is-show');
        }
    });
});

document.querySelectorAll('.site-menu a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.header-site-menu')
      .classList.remove('is-show');
  });
});
