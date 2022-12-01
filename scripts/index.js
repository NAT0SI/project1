/* CONSTANTS AND VARIABLEs ==========================================
===================================================================== */


// Game Buttons
const $roll = $('#roll');
const $reset = $('#reset');
//Dice
const $playerDice = $(".dice");
// Scores
const $pScore = $('#player-total');
const $pCurrent = $('#player-current');
const $rScore = $('#bot-total');
const $rCurrent = $('#bot-current');

const $popup = $('#popup');


// Starting 

const blank = './images/blankdice.png';
const zero = 0;
$playerDice.attr('src', blank);


/* FUNCTIONS ========================================================
===================================================================== */


$('document').ready(function () {

    // Count Rolls
    var rolls = 0;
    const $rollTotal = $('#roll-num');
    $rollTotal.html(rolls)

    function TotalRolls() {

        if (rolls === 3) return;
        rolls++
        $rollTotal.html(rolls)

        delay = 1500;
        setTimeout(function () {
            if (rolls === 3) {
                $popup.addClass("active");
                $popup.removeClass("hidden");
            }
        }, delay);

    };

    // On Click 

    $roll.click(function () {

        TotalRolls();
        rollTheDie();


    });



    /* Roll Dice Function ------------------------------------------ */
    function rollTheDie() {

        $("#p-alert").html('');
        $("#r-alert").html('');

        // Random rolls
        const pFirstRoll = Math.floor(Math.random() * 6) + 1;
        const pSecondRoll = Math.floor(Math.random() * 6) + 1;
        const rFirstRoll = Math.floor(Math.random() * 6) + 1;
        const rSecondRoll = Math.floor(Math.random() * 6) + 1;
        // Dice Faces
        const pFace1 = './images/dice' + pFirstRoll + '.png';
        const pFace2 = './images/dice' + pSecondRoll + '.png';
        const rFace1 = './images/dice' + rFirstRoll + '.png';
        const rFace2 = './images/dice' + rSecondRoll + '.png';
        // Dice Face Output
        document.querySelectorAll("img#player-dice1")[0].setAttribute('src', pFace1);
        document.querySelectorAll("img#player-dice2")[0].setAttribute('src', pFace2);
        document.querySelectorAll("img#bot-dice1")[0].setAttribute('src', rFace1);
        document.querySelectorAll("img#bot-dice2")[0].setAttribute('src', rFace2);

        // Current roll total with conditions
        if (pFirstRoll == 1 || pSecondRoll == 1) {
            ptotal = 0;
            $("#p-alert").html('<p>You rolled a 1. No points added.</p>');
            $pCurrent.html(ptotal);


        } else if (pFirstRoll == pSecondRoll) {
            ptotal = 0;
            add = pFirstRoll + pSecondRoll;
            ptotal = add * 2;
            $pCurrent.html(ptotal);
            $("#p-alert").html('You rolled doubles. Double points added!');
        } else {
            ptotal = pFirstRoll + pSecondRoll;
            $pCurrent.html(ptotal);
        }



        // Robot total 
        if (rFirstRoll == 1 || rSecondRoll == 1) {
            rtotal = 0;
            $("#r-alert").html('You rolled a 1. No points added.');
            $rCurrent.html(rtotal);
        } else if (rFirstRoll == rSecondRoll) {
            rtotal = 0;
            add = rFirstRoll + rSecondRoll;
            rtotal = add * 2;
            $rCurrent.html(rtotal);

            $("#r-alert").html('You rolled doubles. Double points added!');
        } else {
            rtotal = rFirstRoll + rSecondRoll;
            $rCurrent.html(rtotal);
        }



    };



});


