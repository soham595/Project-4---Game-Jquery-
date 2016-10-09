$(function() {

  var player = 1;
  var table = $('table');
  var text = $('#text');
  var turn = $('#turn');
  displayNextPlayer(turn, player);

  $('td').click(function() {
    td = $(this);
    var state = getState(td);
    if(!state) {
      var pattern = definePatternForCurrentPlayer(player);
      changeState(td, pattern);
      if(checkIfPlayerWon(table, pattern)) {
        text.html('Player '+player+' has won.');
        turn.html('');
      } else {
        player = setNextPlayer(player);
        displayNextPlayer(turn, player);
      }
    } else {
      text.html('This box is already checked.');
    }
  });

  $('.reset').click(function() {
    player = 1;
    text.html('');
    reset(table);
    displayNextPlayer(turn, player);
  });

});

function getState(td) {
  if(td.hasClass('cross') || td.hasClass('circle')) {
    return 1;
  } else {
    return 0;
  }
}

function changeState(td, pattern) {
  return td.addClass(pattern);
}

function definePatternForCurrentPlayer(player) {
  if(player == 1) {
    return 'cross';
  } else {
    return 'circle';
  }
}

function setNextPlayer(player) {
  if(player == 1) {
    return player = 2;
  } else {
    return player = 1;
  }
}

function displayNextPlayer(turn, player) {
  turn.html('Player turn : '+player);
}

function checkIfPlayerWon(table, pattern) {
  var won = 0;
  if(table.find('#b1').hasClass(pattern) && table.find('#b2').hasClass(pattern) && table.find('#b3').hasClass(pattern)) {
    won = 1;
  } else if (table.find('#b1').hasClass(pattern) && table.find('#b4').hasClass(pattern) && table.find('#b7').hasClass(pattern)) {
    won = 1;
  } else if (table.find('#b1').hasClass(pattern) && table.find('#b5').hasClass(pattern) && table.find('#b9').hasClass(pattern)) {
    won = 1;
  } else if (table.find('#b4').hasClass(pattern) && table.find('#b5').hasClass(pattern) && table.find('#b6').hasClass(pattern)) {
    won = 1;
  } else if (table.find('#b7').hasClass(pattern) && table.find('#b8').hasClass(pattern) && table.find('#b9').hasClass(pattern)) {
    won = 1;
  } else if (table.find('#b2').hasClass(pattern) && table.find('#b5').hasClass(pattern) && table.find('#b8').hasClass(pattern)) {
    won = 1;
  } else if (table.find('#b3').hasClass(pattern) && table.find('#b6').hasClass(pattern) && table.find('#b9').hasClass(pattern)) {
    won = 1;
  } else if (table.find('#b3').hasClass(pattern) && table.find('#b5').hasClass(pattern) && table.find('#b7').hasClass(pattern)) {
    won = 1;
  }
  return won;
}

function reset(table) {
  table.find('td').each(function() {
    $(this).removeClass('circle').removeClass('cross');
  });
}
