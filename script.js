
$(document).ready(function() {
  $('.shape').each(function(index) {
    var title = $(this).data('title');
    $(this).hover(function() {
      $('#header h1').text(title);
    }, function() {
      $('#header h1').text('Portfolio');
    });
  });
});

$(document).ready(function() {
  $('#back').click(function() {
    window.location.href = '/rndmun/index.html';
  });
});

$(document).ready(function() {
  $('#shape1').click(function() {
    window.location.href = '/rndmun/pages/about_me.html';
  });
});

$(document).ready(function() {
  $('#shape2').click(function() {
    window.location.href = '/rndmun/pages/my_work.html';
  });
});

$(document).ready(function() {
  $('#shape3').click(function() {
    window.location.href = '/rndmun/pages/my_services.html';
  });
});

$(document).ready(function() {
  $('#shape4').click(function() {
    window.location.href = 'https://www.behance.net/dhanujasiriwar';
  });
});

$(document).ready(function() {
  $('#shape5').click(function() {
    window.location.href = 'https://www.instagram.com/blvk_inc/';
  });
});

$(document).ready(function() {
  $('#shape6').click(function() {
    window.location.href = 'https://www.linkedin.com/in/dhanuja-siriwardena/';
  });
});

$(document).ready(function() {
  $('#shape7').click(function() {
    window.location.href = '/rndmun/p5js/index.html';
  });
});

$(document).ready(function() {
  $('#shape9').click(function() {
    window.location.href = '/rndmun/black/index.html';
  });
});






document.onkeydown = function (e) {
  if (event.keyCode == 123) {
      return false;
  }
  if (e.ctrlKey && e.shiftKey && (e.keyCode == 'I'.charCodeAt(0) || e.keyCode == 'i'.charCodeAt(0))) {
      return false;
  }
  if (e.ctrlKey && e.shiftKey && (e.keyCode == 'C'.charCodeAt(0) || e.keyCode == 'c'.charCodeAt(0))) {
      return false;
  }
  if (e.ctrlKey && e.shiftKey && (e.keyCode == 'J'.charCodeAt(0) || e.keyCode == 'j'.charCodeAt(0))) {
      return false;
  }
  if (e.ctrlKey && (e.keyCode == 'U'.charCodeAt(0) || e.keyCode == 'u'.charCodeAt(0))) {
      return false;
  }
  if (e.ctrlKey && (e.keyCode == 'S'.charCodeAt(0) || e.keyCode == 's'.charCodeAt(0))) {
      return false;
  }
}
