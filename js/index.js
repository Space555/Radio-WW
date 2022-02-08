window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.header__search').addEventListener('click', function() {
        document.querySelector('.header__form').classList.toggle('active')
      })

      document.querySelector('.header__search').addEventListener('click', function() {
        document.querySelector('.header__search').classList.toggle('btn-active')
      })

})