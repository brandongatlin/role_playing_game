$(document).ready(function(){


const game = {
    friends: [
        {
            'name' : 'Chandler',
            'hp' : 50,
            'attack' : 10,
            'counter' : 15,
            'power-up' : 0,
            'weapon' : 'Sarcasm',
            'weakness' : 'Truth',
            'src' : './images/chandler.jpg'
        },

        {
            'name': 'Joey',
            'hp': 80,
            'attack': 5,
            'counter': 10,
            'power-up': 0,
            'weapon': 'Looks',
            'weakness': 'Sarcasm',
            'src': './images/joey.jpg'
        },

        {
            'name': 'Monica',
            'hp': 60,
            'attack': 25,
            'counter': 30,
            'power-up': 0,
            'weapon': 'Truth',
            'weakness': 'Messiness',
            'src': './images/monica.jpg'
        },

        {
            'name': 'Rachael',
            'hp': 100,
            'attack': 5,
            'counter': 15,
            'power-up': 0,
            'weapon': 'Messiness',
            'weakness': 'Looks',
            'src': './images/rachael.jpg'
        }
    ],

    player1: null,
    opponent: null,
    availableFriends: [],
    defeated : [],

    start : function(){
        game.availableFriends = game.friends;
        game.createFriends();
        game.showToast('Choose Your Player!');
    },

    createFriends : function(){

        game.availableFriends.forEach(function(friend) {
            const newFriend = `
                <div class="col-3 card w-50 border border-primary text-center friend" data-char="${friend.name}">
                    <div class="card-header">
                        ${friend.name}
                    </div>
                    <img src=${friend.src} />
                    <div class="card-body">
                        <p class="card-text">Attack: ${friend.attack}</p>
                        <p class="card-text">HP: ${friend.hp}</p>
                    </div>
                </div>
            `
            $('#chars').append(newFriend);
        });

    },

    hideFriends : function(){
        $('.friend').hide();
    },

    showFriends : function(){
        
    },

    choosePlayer : function(nameDiv, hpDiv, chosen){

        game.availableFriends.forEach(function(friend){
            if(friend.name === chosen.name){
                let idx = game.availableFriends.indexOf(friend);
                game.availableFriends.splice(idx, 1);
            }
        });
        $('#chars').empty();
        game.createFriends();
        game.showToast(`You chose: ${chosen.name}!`);
        $(nameDiv).text(chosen.name);
        $(hpDiv).text(chosen.hp);
    },

    showToast : function(text){
        let toast = $('<div>').text(text).addClass('naZdrowie col-12');
        $('#toast-msg').append(toast);
        window.setTimeout(function(){
            const toastsOnScreen = $('.naZdrowie');
            const oldestToast = toastsOnScreen[0];
            $(oldestToast).remove();
        }, 2 * 1000);
    },
}

$(document).on('click', '.friend', function(){
    let char = $(this).data('char');

    if(game.player1 === null){

        game.availableFriends.forEach(function(person){
            
            if (person.name === char){
                game.player1 = person;
                game.choosePlayer('#player1-name', '#player1-hp', game.player1);
                game.showToast(`Choose Your Enemy!`);
            }
        });
        
    } else if (game.opponent === null){

        game.availableFriends.forEach(function (person) {

            if (person.name === char) {
                game.opponent = person;
                game.choosePlayer('#opponent-name', '#opponent-hp', game.opponent);
                game.showToast(`Let's Battle!`);
                $('#chars').empty();

            }
        });
        console.log(game.player1, game.opponent);


        
    } else {
        console.log('players chosen');
    }
});

game.start();

});


// functions I need:
// choosePlayer - all 4 pix of the friends are shown and msg to pick by click. set var player1
// chooseOpponent - remaining 3 are shown, must be clicked, set var opponent
// attack - will take player, opponent; will deduct hp accordingly from both characters
// updateDisplay - will take an html id and and number - will update that display.
// resetGame - will zero out score, call choose player

// gameplay - show all friends and message to pick one. after play1 choose a friend, that friend is removed from available friends, and friendlist is re-rendered.
