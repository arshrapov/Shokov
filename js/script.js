$('.close').click(function (eventObject) {
  $('.header__menu').css({
    'display': 'none '
  })
})

$('.open').click(function (eventObject) {
  $('.header__menu').css ({
    'display' : '',
    'opacity' : ''
  })
  $('.header__menu').css ({
    'display' : 'flex',
    'opacity' : '1'
  })
})
