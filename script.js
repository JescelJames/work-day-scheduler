
$(function () {
  //current date
  var today = dayjs();
  $('#currentDay').text(today.format('dddd, MMM D YYYY'));


  //to change color of each class depending on current time
  $('.time-block').each(function() {
    var currentHour = dayjs().hour();
    var eachWorkingHour = parseInt($(this).attr('id').replace('hour-', ''));
    
    console.log(currentHour, eachWorkingHour);

    $(this).removeClass('past present future');
    
    if (eachWorkingHour < currentHour) {
      $(this).addClass('past');
    } 
    else if (eachWorkingHour === currentHour) {
      $(this).addClass('present');
    } 
    else {
      $(this).addClass('future');
    }
    
    
    var savedData = localStorage.getItem($(this).attr('id'));
    if (savedData) {
      $(this).find('.description').val(savedData);
    }
  });

  //save to local storage
  $('.saveBtn').on('click', function() {
    console.log('i clicked', this);
    var timeBlockId = $(this).parent().attr('id');
    var userInput = $(this).siblings('.description').val().trim();

    if (userInput === '') {
      console.log('Input cleared, removing saved data.');
      localStorage.removeItem(timeBlockId); 
      return;
    } 
    else {
      localStorage.setItem(timeBlockId, userInput); 
    }

    
  });

  


});
