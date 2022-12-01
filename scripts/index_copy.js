$('document').ready(function() {
    var rolls = 0;
    $('#roll-num').html(rolls)
  
    function die() {
      var selected = false;
      var firstroll = false;
      var turns = 0;
      this.value = 0;
      this.dom = null;
      this.roll = function() {
        if (!selected) {

          this.value = Math.floor(Math.random() * 6) + 1;
        }
        this.dom = $(`<img class="dice" src="./images/dice${this.value}.png"; height="150px" width="150px">`);
        this.dom.click(function() {
          selected = !selected;
        });
      }
    }
  
    var dice = [];
    dice.push(new die());
    dice.push(new die());
  
    for (var i = 0; i < 2; i++) {
      if (die.firstroll === true) {
        dice[i].roll();
        $('#player-current').append(dice[i].dom);
      }
    }
  
    $('#roll').click(function() {
      if (rolls === 3) return;
      rolls++
      $('#roll-num').html(rolls)
      die.firstroll = true;
      $('#dice-container').empty();
      for (var i = 0; i < 2; i++) {
        dice[i].roll();
        $('#dice-container').append(dice[i].dom);
      }
    });
  
    $('#roll').click(function() {
      console.log(dice[1].value);
      console.log(dice[1].selected);
      $(dice).append(dice[1].value);
    });
  });