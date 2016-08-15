var expect = require('chai').expect;

describe('checkForShip', function() {
    var checkForShip = require('../game_logic/ship_methods').checkForShip;

    it('should correctly report no ship at a given players coordinate', function() {

        player = {
            ships: [
                {
                    locations: [[0, 0]]
                }
            ]
        };

        expect(checkForShip(player, [9, 9])).to.be.false;
    });


    it('should correctly report a ship located at a given coordinates', function() {

        player = {
            ships: [
                {
                    locations: [[0, 0]]
                }
            ]
        };

        expect(checkForShip(player, [0, 0])).to.be.true;
    });


    it('should correctly ships located at more than one coordinate', function() {

        player = {
            ships: [
                {
                    locations: [[0, 0], [0, 1]]
                }
            ]
        };

        expect(checkForShip(player, [0, 1])).to.be.true;
        expect(checkForShip(player, [0, 0])).to.be.true;
        expect(checkForShip(player, [9, 9])).to.be.false;
    });


    it('should random checking multiple ships', function() {

        player = {
            ships: [
                {
                    locations: [[0, 0], [0, 1]]
                },
                {
                    locations: [[1, 0], [1, 1]]
                },
                {
                    locations: [[2, 0], [2, 1], [2, 2], [2, 3]]
                }
            ]
        };

        expect(checkForShip(player, [0, 1])).to.be.true;
        expect(checkForShip(player, [0, 0])).to.be.true;

        expect(checkForShip(player, [1, 0])).to.be.true;
        expect(checkForShip(player, [1, 1])).to.be.true;

        expect(checkForShip(player, [2, 0])).to.be.true;

        expect(checkForShip(player, [9, 9])).to.be.false;
    });
});

describe('damageShip', function() {
    var damageShip = require('../game_logic/ship_methods').damageShip;

    it('should register damage on a given ship at a given location', function() {
        var ship = {
            locations: [[0, 0]],
            damage: []
        };

        damageShip(ship, [0, 0]);

        expect(ship.damage).to.not.be.empty;
        expect(ship.damage[0]).to.deep.equal([0, 0]); // vê se o primeiro elemento do array é igual a [0, 0]
    });
});

describe('fire', function() {
    var fire = require('../game_logic/ship_methods').fire;

    it('should recorder damage on the given player ship at a given coordinate', function() {
        var player = {
            ships: [
                {
                    locations: [[0, 0]],
                    damage: []
                }
            ]
        };

        fire(player, [0, 0]);

        expect(player.ships[0].damage[0]).to.deep.equal([0, 0]);
    });
});

// um método para os jogadores chamarem
// que "dispara um tiro" no navio do oponente
// usando checkForShip para confirmar o suposto ataque do jogador
// e usando damageShip para registrar um dano para o oponente
// utilizando alguns métodos de assertions da api do Chai
//