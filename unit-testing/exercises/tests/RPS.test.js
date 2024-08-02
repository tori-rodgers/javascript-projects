const winnerCheck = require('../RPS.js');

describe("whoWon", function(){
    test("returns 'TIE!' both players choose the same item", function (){
        let output = winnerCheck.whoWon('paper', 'paper');
        expect(output).toBe("TIE!");
    });
    test("returns 'Player 2 wins!' if P1 = rock & P2 = paper", function() {
        let output = winnerCheck.whoWon('rock', 'paper');
        expect(output).toBe("Player 2 wins!");
    });
    test("returns 'Player 2 Wins!' if P1 = paper & P2 = scissors", function() {
        let output = winnerCheck.whoWon('paper', 'scissors');
        expect(output).toBe("Player 2 wins!");
    });
    test("returns 'Player 2 wins!' if P1 = scissors & P2 = rock", function () {
        let output = winnerCheck.whoWon('scissors', 'rock');
        expect(output).toBe("Player 2 wins!");
    });


});