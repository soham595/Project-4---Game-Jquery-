$(function() {

  var player=1;
  var table=$('table');
  var turn=$('.turn');
  var text=$('.text');

  $('td').click(function() {
    var td=$(this);
    var state=getState(td);
    if (state) {
      text.html('Box already checked !');
    }
    else {
      var ele=create(td);
      var win;
      td.addClass(ele);
      win=getResult(win, ele, table);
      if(win) {
        text.html('');
        turn.html('PLAYER '+player+' HAS WON !!');
      }
      else {
        if (player==1) {
          player=2;
        }
        else {
          player=1;
        }
        text.html('');
        turn.html('Player turn - '+player);
      }
    }
  })

  $('.res').click(function() {
    player=1;
    turn.html('Player 1 start the game.');
    text.html('');
    reset(table);
  })
  function getState(td) {
    if(td.hasClass('cross')||td.hasClass('circle'))
      return 1;
    else
      return 0;
  }

  function create(td) {
    if(player==1)
      return 'cross';
    else {
      return 'circle';
    }
  }

  function getResult(win, ele, table) {
    if (table.find('#b1').hasClass(ele)&&table.find('#b2').hasClass(ele)&&table.find('#b3').hasClass(ele)) {
      return 1;
    }
    else if (table.find('#b4').hasClass(ele)&&table.find('#b5').hasClass(ele)&&table.find('#b6').hasClass(ele)) {
      return 1;
    }
    else if (table.find('#b7').hasClass(ele)&&table.find('#b8').hasClass(ele)&&table.find('#b9').hasClass(ele)) {
      return 1;
    }
    else if (table.find('#b1').hasClass(ele)&&table.find('#b4').hasClass(ele)&&table.find('#b7').hasClass(ele)) {
      return 1;
    }
    else if (table.find('#b2').hasClass(ele)&&table.find('#b5').hasClass(ele)&&table.find('#b8').hasClass(ele)) {
      return 1;
    }
    else if (table.find('#b3').hasClass(ele)&&table.find('#b6').hasClass(ele)&&table.find('#b9').hasClass(ele)) {
      return 1;
    }
    else if (table.find('#b3').hasClass(ele)&&table.find('#b5').hasClass(ele)&&table.find('#b7').hasClass(ele)) {
      return 1;
    }
    else if (table.find('#b1').hasClass(ele)&&table.find('#b5').hasClass(ele)&&table.find('#b9').hasClass(ele)) {
      return 1;
    }
    return 0;
  }

  function reset(table) {
    table.find('td').each(function() {
      $(this).removeClass('cross').removeClass('circle');
    })
  }
})
