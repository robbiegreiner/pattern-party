const changeTab = (event) => {
  const clickedTab = $(event.target);
  const divToShow = $(`#${clickedTab.data('tab')}`);
  console.log($(clickedTab.data('tab')));

  $('.tab-content').css('display', 'none');
  divToShow.css('display', 'flex')

  $('.tab').removeClass('active-tab');
  clickedTab.addClass('active-tab');

  // $('.span:nth-of-type(2)').text('+');
  // divToShow.find('span:nth-of-type(2)').text('-')
}

$('.tab').on('click', (event) => changeTab(event));
