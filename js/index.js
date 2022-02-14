window.addEventListener('DOMContentLoaded', function() {
//Поиск
    document.querySelector('.header__search').addEventListener('click', function() {
        document.querySelector('.header__form').classList.toggle('active')
      })

      document.querySelector('.header__search').addEventListener('click', function() {
        document.querySelector('.header__search').classList.toggle('btn-active')
      })
//Кнопка паузы "Ранее"
      document.querySelector('.header__music-btn-after').addEventListener('click', function() {
        document.querySelector('.header__music-btn-after').classList.toggle('paused')
      })

      document.querySelector('.header__music-btn-after').addEventListener('click', function() {
        document.querySelector('.header__paused').classList.toggle('paused')
      })

      document.querySelector('.header__paused').addEventListener('click', function() {
        document.querySelector('.header__music-btn-after').classList.remove('paused')
      })

      document.querySelector('.header__paused').addEventListener('click', function() {
        document.querySelector('.header__paused').classList.remove('paused')
      })
//Кнопка паузы сейчас
      document.querySelector('.header__music-btn-before').addEventListener('click', function() {
        document.querySelector('.header__music-btn-before').classList.toggle('paused')
      })

      document.querySelector('.header__music-btn-before').addEventListener('click', function() {
        document.querySelector('.header__paused-left').classList.toggle('paused')
      })

      document.querySelector('.header__paused-left').addEventListener('click', function() {
        document.querySelector('.header__music-btn-before').classList.remove('paused')
      })

      document.querySelector('.header__paused-left').addEventListener('click', function() {
        document.querySelector('.header__paused-left').classList.remove('paused')
      })

//Кнопка паузы в подкастах

//Europe

document.querySelector('.podcast__btn-block').addEventListener('click', function() {
  document.querySelector('.podcast__btn-block').classList.toggle('btn-paused')
})

document.querySelector('.podcast__btn-block').addEventListener('click', function() {
  document.querySelector('.podcast__btn-pause').classList.toggle('btn-paused')
})

document.querySelector('.podcast__btn-pause').addEventListener('click', function() {
  document.querySelector('.podcast__btn-pause').classList.remove('btn-paused')
})

document.querySelector('.podcast__btn-pause').addEventListener('click', function() {
  document.querySelector('.podcast__btn-block').classList.remove('btn-paused')
})

//the music

document.querySelector('.music').addEventListener('click', function() {
  document.querySelector('.music').classList.toggle('btn-paused')
})

document.querySelector('.music').addEventListener('click', function() {
  document.querySelector('.music-paused').classList.toggle('btn-paused')
})

document.querySelector('.music-paused').addEventListener('click', function() {
  document.querySelector('.music').classList.remove('btn-paused')
})

document.querySelector('.music-paused').addEventListener('click', function() {
  document.querySelector('.music-paused').classList.remove('btn-paused')
})

//people

document.querySelector('.people').addEventListener('click', function() {
  document.querySelector('.people').classList.toggle('btn-paused')
})

document.querySelector('.people').addEventListener('click', function() {
  document.querySelector('.people-paused').classList.toggle('btn-paused')
})

document.querySelector('.people-paused').addEventListener('click', function() {
  document.querySelector('.people').classList.remove('btn-paused')
})

document.querySelector('.people-paused').addEventListener('click', function() {
  document.querySelector('.people-paused').classList.remove('btn-paused')
})

//africa

document.querySelector('.africa').addEventListener('click', function() {
  document.querySelector('.africa').classList.toggle('btn-paused')
})

document.querySelector('.africa').addEventListener('click', function() {
  document.querySelector('.africa-paused').classList.toggle('btn-paused')
})

document.querySelector('.africa-paused').addEventListener('click', function() {
  document.querySelector('.africa').classList.remove('btn-paused')
})

document.querySelector('.africa-paused').addEventListener('click', function() {
  document.querySelector('.africa-paused').classList.remove('btn-paused')
})

//all

document.querySelector('.all').addEventListener('click', function() {
  document.querySelector('.all').classList.toggle('btn-paused')
})

document.querySelector('.all').addEventListener('click', function() {
  document.querySelector('.all-paused').classList.toggle('btn-paused')
})

document.querySelector('.all-paused').addEventListener('click', function() {
  document.querySelector('.all').classList.remove('btn-paused')
})

document.querySelector('.all-paused').addEventListener('click', function() {
  document.querySelector('.all-paused').classList.remove('btn-paused')
})

//phisic

document.querySelector('.phisic').addEventListener('click', function() {
  document.querySelector('.phisic').classList.toggle('btn-paused')
})

document.querySelector('.phisic').addEventListener('click', function() {
  document.querySelector('.phisic-paused').classList.toggle('btn-paused')
})

document.querySelector('.phisic-paused').addEventListener('click', function() {
  document.querySelector('.phisic').classList.remove('btn-paused')
})

document.querySelector('.phisic-paused').addEventListener('click', function() {
  document.querySelector('.phisic-paused').classList.remove('btn-paused')
})

//sound

document.querySelector('.sound').addEventListener('click', function() {
  document.querySelector('.sound').classList.toggle('btn-paused')
})

document.querySelector('.sound').addEventListener('click', function() {
  document.querySelector('.sound-paused').classList.toggle('btn-paused')
})

document.querySelector('.sound-paused').addEventListener('click', function() {
  document.querySelector('.sound').classList.remove('btn-paused')
})

document.querySelector('.sound-paused').addEventListener('click', function() {
  document.querySelector('.sound-paused').classList.remove('btn-paused')
})

//etiquette

document.querySelector('.etiquette').addEventListener('click', function() {
  document.querySelector('.etiquette').classList.toggle('btn-paused')
})

document.querySelector('.etiquette').addEventListener('click', function() {
  document.querySelector('.etiquette-paused').classList.toggle('btn-paused')
})

document.querySelector('.etiquette-paused').addEventListener('click', function() {
  document.querySelector('.etiquette').classList.remove('btn-paused')
})

document.querySelector('.etiquette-paused').addEventListener('click', function() {
  document.querySelector('.etiquette-paused').classList.remove('btn-paused')
})

});

// Select

const element = document.querySelector('.programs__select');
const choices = new Choices(element, {
  searchEnabled: false ,
  itemSelectText: '' 
  
});

//Accordion

$(".guests__list").accordion({
  heightStyle: "content",
  collapsible: true,
  active: false

  });

  window.addEventListener('DOMContentLoaded', function() {
    //Аккордион бордер
        document.querySelector('.guests__list-title').addEventListener('click', function() {
            document.querySelector('.guests__list-item').classList.toggle('is-open')
          })

          document.querySelector('.arthead').addEventListener('click', function() {
            document.querySelector('.art').classList.toggle('is-open')
          })

          document.querySelector('.artisthead').addEventListener('click', function() {
            document.querySelector('.artist').classList.toggle('is-open')
          })

          document.querySelector('.sciencehead').addEventListener('click', function() {
            document.querySelector('.science').classList.toggle('is-open')
          })

          document.querySelector('.historyhead').addEventListener('click', function() {
            document.querySelector('.history').classList.toggle('is-open')
          })

          document.querySelector('.philosophyhead').addEventListener('click', function() {
            document.querySelector('.philosophy').classList.toggle('is-open')
          })
        })

        // Tabs

document.querySelectorAll('.guests__button').forEach(function(tabsBtn) {

  tabsBtn.addEventListener('click', function(e) {

    const path = e.currentTarget.dataset.path;

     document.querySelectorAll('.guests__button').forEach(function(btn) {

      btn.classList.remove('push')});

        e.currentTarget.classList.add('push');

          document.querySelectorAll('.guests__tabs-block').forEach(function(tabsBtn) {

            tabsBtn.classList.remove('push-active')

          });

                document.querySelector(`[data-target="${path}"]`).classList.add('push-active');
  });

});