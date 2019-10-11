const game = {
    friends: [
        {
            'name' : 'Chandler',
            'hp' : 50,
            'attack' : 10,
            'counter' : 15,
            'power-up' : 0,
            'src' : './images/chandler.jpg'
        },

        {
            'name': 'Joey',
            'hp': 80,
            'attack': 5,
            'counter': 10,
            'power-up': 0,
            'src': './images/joey.jpg'
        },

        {
            'name': 'Monica',
            'hp': 60,
            'attack': 25,
            'counter': 30,
            'power-up': 0,
            'src': './images/monica.jpg'
        },

        {
            'name': 'Jennifer Aniston',
            'hp': 100,
            'attack': 5,
            'counter': 15,
            'power-up': 0,
            'src': './images/jenn.jpg'
        }
    ],

    player1: {},
    opponent: {},
    defeated : [],

    start : function(){
        game.player1 = game.friends[0];
        game.createFriends()
    },

    createFriends : function(){

        game.friends.forEach(function(friend) {
            const newFriend = `
                <div class="card w-50 text-center">
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
            $('#all-chars').append(newFriend);
        });


    }


}

game.start();

// functions I need:
// choosePlayer - all 4 pix of the friends are shown and msg to pick by click. set var player1
// chooseOpponent - remaining 3 are shown, must be clicked, set var opponent
// attack - will take player, opponent; will deduct hp accordingly from both characters
// updateDisplay - will take an html id and and number - will update that display.
// resetGame - will zero out score, call choose player
