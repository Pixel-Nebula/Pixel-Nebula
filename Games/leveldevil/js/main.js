// =============================================================================
// sprites
// =============================================================================

//
// hero sprite
//
function Hero(game, x, y) {
    Phaser.Sprite.call(this, game, x, y, 'hero');
    this.anchor.set(0.5, 0.5);

    // physic properties
    this.game.physics.enable(this);
    this.body.collideWorldBounds = true;

    this.animations.add('stop', [0]);
    this.animations.add('run', [1, 2], 8, true); // 8fps looped
    this.animations.add('jump', [3]);
    this.animations.add('fall', [4]);
}

// inherit from Phaser.Sprite
Hero.prototype = Object.create(Phaser.Sprite.prototype);
Hero.prototype.constructor = Hero;

Hero.prototype.move = function (direction) {
    const SPEED = 200;
    this.body.velocity.x = direction * SPEED;

    // update image flipping & animations
    if (this.body.velocity.x < 0) {
        this.scale.x = -1;
    }
    else if (this.body.velocity.x > 0) {
        this.scale.x = 1;
    }
};

Hero.prototype.jump = function () {
    const JUMP_SPEED = 600;
    let canJump = this.body.touching.down;

    if (canJump) {
        this.body.velocity.y = -JUMP_SPEED;
    }

    return canJump;
};

Hero.prototype.bounce = function () {
    const BOUNCE_SPEED = 200;
    this.body.velocity.y = -BOUNCE_SPEED;
};

Hero.prototype.update = function () {
    // update sprite animation, if it needs changing
    let animationName = this._getAnimationName();
    if (this.animations.name !== animationName) {
        this.animations.play(animationName);
    }
};

Hero.prototype._getAnimationName = function () {
    let name = 'stop'; // default animation

    // jumping
    if (this.body.velocity.y < 0) {
        name = 'jump';
    }
    // falling
    else if (this.body.velocity.y >= 0 && !this.body.touching.down) {
        name = 'fall';
    }
    else if (this.body.velocity.x !== 0 && this.body.touching.down) {
        name = 'run';
    }

    return name;
};

//
// Spider (enemy)
//
function Spider(game, x, y) {
    Phaser.Sprite.call(this, game, x, y, 'spider');

    // anchor
    this.anchor.set(0.5);
    // animation
    this.animations.add('crawl', [0, 1, 2], 8, true); // 8fps, looped
    this.animations.add('die', [0, 4, 0, 4, 0, 4, 3, 3, 3, 3, 3, 3], 12);
    this.animations.play('crawl');

    // physic properties
    this.game.physics.enable(this);
    this.body.collideWorldBounds = true;
    this.body.velocity.x = Spider.SPEED;
    this.body.allowGravity = false;
    this.body.enable = true;
}

Spider.SPEED = 0;

// inherit from Phaser.Sprite
Spider.prototype = Object.create(Phaser.Sprite.prototype);
Spider.prototype.constructor = Spider;
/*
Spider.prototype.update = function () {
    // check against walls and reverse direction if necessary
    if (this.body.touching.right || this.body.blocked.right) {
        this.body.velocity.x = -Spider.SPEED; // turn left
    }
    else if (this.body.touching.left || this.body.blocked.left) {
        this.body.velocity.x = Spider.SPEED; // turn right
    }
};
*/
Spider.prototype.die = function () {
    this.body.enable = false;

    this.animations.play('die').onComplete.addOnce(function () {
        this.kill();
    }, this);
};


// =============================================================================
// game states
// =============================================================================

PlayState = {};

const LEVEL_COUNT = 5;
var movingpart;
var keypart;
var move_id = 0;
const movingarray = [];
const move_direction = [];
var level_haskey;
var key_direction;
var key_gravity = false;

PlayState.init = function (data) {
    this.game.renderer.renderSession.roundPixels = true;

    this.keys = this.game.input.keyboard.addKeys({
        left: Phaser.KeyCode.A,
        right: Phaser.KeyCode.D,
        up: Phaser.KeyCode.W,
        down: Phaser.KeyCode.S,
        space: 32,
        //arrow keys
        alt_left: Phaser.KeyCode.LEFT,
        alt_right:Phaser.KeyCode.RIGHT,
        alt_up: Phaser.KeyCode.UP
    });

    this.keys.up.onDown.add(function () {
        let didJump = this.hero.jump();
        if (didJump) {
            this.sfx.jump.play();
        }
    }, this);
    
    this.keys.space.onDown.add(function () {
        let didJump = this.hero.jump();
        if (didJump) {
            this.sfx.jump.play();
        }
    }, this);
    
    this.keys.alt_up.onDown.add(function () {
        let didJump = this.hero.jump();
        if (didJump) {
            this.sfx.jump.play();
        }
    }, this);
    
    this.keys.down.onDown.add(function () {
        this.hero.loadTexture('hero_sneak')
    }, this);
    
    this.keys.down.onUp.add(function () {
        this.hero.loadTexture('hero')
    }, this);
    
    this.coinPickupCount = 0;
    this.hasKey = false;
    this.level = (data.level || 1) % LEVEL_COUNT;
};

PlayState.preload = function () {
    this.game.load.json('level:1', 'data/level01.json');
    this.game.load.json('level:2', 'data/level02.json');
    this.game.load.json('level:3', 'data/level03.json');
    this.game.load.json('level:4', 'data/level04.json');

    this.game.load.image('font:numbers', 'images/numbers.png');

    this.game.load.image('background', 'images/background.png');
    this.game.load.image('ground', 'images/ground.png');
    this.game.load.image('dirt', 'images/dirt.png');
    this.game.load.image('grass:8x1', 'images/grass_8x1.png');
    this.game.load.image('grass:6x1', 'images/grass_6x1.png');
    this.game.load.image('grass:4x1', 'images/grass_4x1.png');
    this.game.load.image('grass:2x1', 'images/grass_2x1.png');
    this.game.load.image('grass:1x1', 'images/grass_1x1.png');
    this.game.load.image('invisible-wall', 'images/invisible_wall.png');
    this.game.load.image('icon:coin', 'images/coin_icon.png');
    this.game.load.image('key', 'images/key.png');
    this.game.load.spritesheet('hero_sneak', 'images/hero_sneaking.png', 36, 18);

    this.game.load.spritesheet('coin', 'images/coin_animated.png', 22, 22);
    this.game.load.spritesheet('spider', 'images/touch_detect.png', 284, 270);
    this.game.load.spritesheet('hero', 'images/hero.png', 36, 42);
    this.game.load.spritesheet('door', 'images/door.png', 42, 66);
    this.game.load.spritesheet('icon:key', 'images/key_icon.png', 34, 30);
    this.game.load.image('kill', 'images/kill_ground.png');
    this.game.load.image('move_ground', 'images/move/ground_1.png');

    this.game.load.audio('sfx:jump', 'audio/jump.wav');
    this.game.load.audio('sfx:coin', 'audio/coin.wav');
    this.game.load.audio('sfx:stomp', 'audio/stomp.wav');
    this.game.load.audio('sfx:key', 'audio/key.wav');
    this.game.load.audio('sfx:door', 'audio/door.wav');
};

PlayState.create = function () {
    // create sound entities
    this.sfx = {
        jump: this.game.add.audio('sfx:jump'),
        coin: this.game.add.audio('sfx:coin'),
        stomp: this.game.add.audio('sfx:stomp'),
        key: this.game.add.audio('sfx:key'),
        door: this.game.add.audio('sfx:door')
    };

    // create level
    this.game.add.image(0, 0, 'background');
    this._loadLevel(this.game.cache.getJSON(`level:${this.level}`));

    // crete hud with scoreboards)
    this._createHud();
};

PlayState.update = function () {
    this._handleCollisions();
    this._handleInput();

    this.coinFont.text = `x${this.coinPickupCount}`;
    this.keyIcon.frame = this.hasKey ? 1 : 0;
};

PlayState._handleCollisions = function () {
    
    this.game.physics.arcade.collide(this.hero, this.move);
    this.game.physics.arcade.collide(this.key, this.platforms);
    this.game.physics.arcade.collide(this.hero, this.platforms);
    this.game.physics.arcade.collide(this.move, this.enemyWalls);
    this.game.physics.arcade.collide(this.spiders, this.platforms);
    
    this.game.physics.arcade.overlap(this.hero, this.spiders,
        this._onHeroVsTouch, null, this);
    
    this.game.physics.arcade.overlap(this.move, this.enemyWalls,
        this._onMoveVsWall, this.game.physics.arcade.overlap.get, this);
    
    this.game.physics.arcade.overlap(this.key, this.enemyWalls,
        this._onKeyVsWall, this.game.physics.arcade.overlap.get, this);
    
    this.game.physics.arcade.overlap(this.hero, this.coins, this._onHeroVsCoin,
        null, this);
    
    this.game.physics.arcade.overlap(this.hero, this.spike, this._onHeroVsSpike,
        null, this);
    
    this.game.physics.arcade.overlap(this.hero, this.kill, this._onHeroVsKill,
        null, this);
    
    this.game.physics.arcade.overlap(this.hero, this.move, this._onHeroVsMove,
        null, this);
    
    this.game.physics.arcade.overlap(this.hero, this.key, this._onHeroVsKey,
        null, this);
    
    this.game.physics.arcade.overlap(this.hero, this.door, this._onHeroVsDoor,
        // ignore if there is no key or the player is on air
        function (hero, door) {
            return this.hasKey && hero.body.touching.down;
        }, this);
};

PlayState._handleInput = function () {
    if (this.keys.left.isDown || this.keys.alt_left.isDown) { // move hero left
        this.hero.move(-1);
    }
    else if (this.keys.right.isDown || this.keys.alt_right.isDown) { // move hero right
        this.hero.move(1);
    }
    else { // stop
        this.hero.move(0);
    }
};

PlayState._loadLevel = function (data) {
    // create all the groups/layers that we need
    this.move = this.game.add.group();
    this.platforms = this.game.add.group();
    this.spike = this.game.add.group();
    this.kill = this.game.add.group();
    this.coins = this.game.add.group();
    this.spiders = this.game.add.group();
    this.bgDecoration = this.game.add.group();
    this.enemyWalls = this.game.add.group();

    // spawn all platforms
    data.platforms.forEach(this._spawnPlatform, this);
    // spawn hero and enemies
    this._spawnCharacters({hero: data.hero, spiders: data.spiders});
    // spawn important objects
    if (data.hasCoins == true) {
    data.coins.forEach(this._spawnCoin, this);
    }
    this._spawnDoor(data.door.x, data.door.y);
    level_haskey = data.haskey;
    if (data.haskey == false) {
    data.key.forEach(this._spawnKey, this);
    }
    // spawn moving part
    data.move.forEach(this._spawnMove, this);
    // spawn kill area
    data.kill.forEach(this._spawnKill, this);

    // enable gravity
    const GRAVITY = 1200;
    this.game.physics.arcade.gravity.y = GRAVITY;
    
    this.hasKey = data.haskey;;
};

PlayState._spawnPlatform = function (platform) {
    let sprite = this.platforms.create(
        platform.x, platform.y, platform.image);

    this.game.physics.enable(sprite);
    sprite.body.allowGravity = false;
    sprite.body.immovable = true;
    sprite.visible = true;
};

PlayState._spawnEnemyWall = function (x, y, side, rotation) {
    let sprite = this.enemyWalls.create(x, y, 'invisible-wall');
    // anchor and y displacement
    sprite.angle = rotation;
    sprite.anchor.set(side === 'left' ? 30 : 1, 1);
    // physic properties
    this.game.physics.enable(sprite);
    sprite.body.immovable = true;
    sprite.body.allowGravity = false;
    sprite.visible = true;
};

PlayState._spawnCharacters = function (data) {
    // spawn spiders
    data.spiders.forEach(function (spider) {
        let sprite = new Spider(this.game, spider.x, spider.y);
        this.spiders.add(sprite);
        sprite.body.localName = move_id;
        console.log("spider_id:"+ move_id);
        sprite.body.allowGravity = false;
        sprite.body.immovable = true;
        sprite.body.immovable = true;
        sprite.visible = false;
    }, this);

    // spawn hero
    if (this.level != 4) {
        this.hero = new Hero(this.game, data.hero.x, data.hero.y);
        this.game.add.existing(this.hero);
    }
    else {
        console.log(data.alpha_end);
        document.getElementById("Message").innerHTML = "THANKS FOR PLAYING THIS GAME. ITS STILL IN DEVELOPMENT, SO IF YOU LIKED IT WAIT SOME TIME, FOR MORE LEVELS!";
    }
};

PlayState._spawnCoin = function (coin) {
    let sprite = this.coins.create(coin.x, coin.y, 'coin');
    sprite.anchor.set(0.5, 0.5);

    this.game.physics.enable(sprite);
    sprite.body.allowGravity = true;

    sprite.animations.add('rotate', [0, 1, 2, 1], 6, true); // 6fps, looped
    sprite.animations.play('rotate');
};

PlayState._spawnDoor = function (x, y) {
    this.door = this.bgDecoration.create(x, y, 'door');
    this.door.anchor.setTo(0.5, 1);
    this.game.physics.enable(this.door);
    this.door.body.allowGravity = false;
};

PlayState._spawnKey = function (key) {
    this.key = this.bgDecoration.create(key.x, key.y, 'key');
    this.key.anchor.set(0.5, 0.5);
    // enable physics to detect collisions, so the hero can pick the key up
    this.game.physics.enable(this.key);
    this.key.body.allowGravity = false;
    // add a small 'up & down' animation via a tween
    /*this.key.y -= 3;
    this.game.add.tween(this.key)
        .to({y: this.key.y + 6}, 800, Phaser.Easing.Sinusoidal.InOut)
        .yoyo(true)
        .loop()
        .start();
        */
    keypart = this.key;
    key_direction = key.direction;
    key_gravity = key.allowGravity;
    
    if (key.direction == "left" || key.direction == "right") {
    //this._spawnEnemyWall(platform.x, platform.y, 'left');
    this._spawnEnemyWall(key.x + this.key.width + 185, key.y + 100, key.direction, 0);
    //movingpart = sprite;
    this._spawnEnemyWall(key.x + this.key.width + 185, key.y, key.direction, 0);
    }
    else if (key.direction == "down") {
    //this._spawnEnemyWall(platform.x, platform.y, 'left');
    this._spawnEnemyWall(key.x, key.y + 185, key.direction, 90);
    this._spawnEnemyWall(key.x + 100, key.y + 185, key.direction, 90);
    }
        else if (key.direction == "up") {
    this._spawnEnemyWall(key.x, key.y - 185, key.direction, 90);
    this._spawnEnemyWall(key.x + 100, key.y - 185, key.direction, 90);
    }
    else if (key.direction.ignoreCase == "NaN" || key.direction == null) {
        
    }
};

PlayState._spawnMove = function (move) {
    let sprite = this.move.create(move.x, move.y, 'move_ground');
    sprite.anchor.set(0, 0);
    this.game.physics.enable(sprite);
    sprite.body.allowGravity = false;
    sprite.body.immovable = true;
    sprite.body.localName = "id:" + move_id;
    console.log(sprite);
    move_id += 1;
    console.log("movingarray");  
    console.log(movingarray);
    move_direction.push(move.direction);
    
    if (move.direction == "left" || move.direction == "right") {
    //this._spawnEnemyWall(platform.x, platform.y, 'left');
    this._spawnEnemyWall(move.x + sprite.width + 185, move.y + 100, move.direction, 0);
    //movingpart = sprite;
    this._spawnEnemyWall(move.x + sprite.width + 185, move.y, move.direction, 0);
    }
    else if (move.direction == "down") {
    //this._spawnEnemyWall(platform.x, platform.y, 'left');
    this._spawnEnemyWall(move.x, move.y + 185, move.direction, 90);
    this._spawnEnemyWall(move.x + 100, move.y + 385, move.direction, 90);
    }
        else if (move.direction == "up") {
    this._spawnEnemyWall(move.x, move.y - 185, move.direction, 90);
    this._spawnEnemyWall(move.x + 100, move.y - 185, move.direction, 90);
    }
    movingarray.push(sprite);
};

PlayState._spawnKill = function (kill) {
    let sprite = this.kill.create(kill.x, kill.y, 'kill');
    sprite.anchor.set(0.5, 0.5);
    this.game.physics.enable(sprite);
    sprite.body.allowGravity = false;
    sprite.body.enable = true;
    sprite.visible = false;
};


PlayState._onHeroVsCoin = function (hero, coin) {
    this.sfx.coin.play();
    coin.kill();
    this.coinPickupCount++;
};

PlayState._onHeroVsEnemy = function (hero, enemy) {
    if (hero.body.velocity.y > 0) { // kill enemies when hero is falling
        hero.bounce();
        enemy.die();
        this.sfx.stomp.play();
    }
    else { // game over -> restart the game
        this.sfx.stomp.play();
        this.game.state.restart(true, false, {level: this.level});
    }
};

PlayState._onHeroVsKey = function (hero, key) {
    this.sfx.key.play();
    key.kill();
    this.hasKey = true;
};

PlayState._onHeroVsDoor = function (hero, door) {
    this.sfx.door.play();
    this.hasKey = false;
    movingarray.length = 0;
    console.log("level " + this.level);
    if (this.level < 4) {
        this.game.state.restart(true, false, { level: this.level + 1 });
    }
};

PlayState._onHeroVsTouch = function (hero, touch) {
    console.log("movingpart " + movingarray[0].body.localName);
    console.log("move_direction " + move_direction[0]);
    if (move_direction[0] == 'right') {
    movingarray[0].body.velocity.x = 400;
    } 
    else if (move_direction[0] == 'left') {
    movingarray[0].body.velocity.x = -400;
    }
    else if (move_direction[0] == 'up') {
    movingarray[0].body.velocity.y = -400;
    }
    else if (move_direction[0] == 'down') {
    movingarray[0].body.velocity.y = 400;
    }
    else if (move_direction[0].ignoreCase == 'NaN'|| move_direction[0].ignoreCase == null) {
    
    }
    touch.kill();
    if (keypart != null) {
        if (key_direction == "right") {
            keypart.body.velocity.x = 400;
        }
        else if (key_direction == "left") {
            keypart.body.velocity.x = -400;
        }
        else if (key_direction == "up") {
            keypart.body.velocity.y = -1600;
            keypart.body.allowGravity = key_gravity;
        }
        else if (key_direction == "down") {
            keypart.body.velocity.y = 400;
        }
        else if (key_direction == "NaN" || key_direction == null) {

        }
    }
    console.log(movingarray[0].body.position.x);  
    movingarray.splice(0, 1);
    move_direction.splice(0, 1);
    console.log("movingarray");  
    console.log(movingarray);  

}

PlayState._onHeroVsSpike = function (hero, spike) {
    console.log("TEXT");
    hero.kill();
    this.sfx.stomp.play();
    this.game.state.restart(true, false, { level: this.level + 1 });
};

PlayState._onHeroVsKill = function (hero, kill) {
    console.log("TEXT");
    hero.kill();
    movingarray.length = 0;
    this.sfx.stomp.play();
    this.game.state.restart(true, false, { level: this.level});
};

PlayState._onMoveVsWall = function (move, wall) {
    console.log("kill" + move.body.localName);
    move.kill();
}

PlayState._onKeyVsWall = function (key, wall) {
    key.body.velocity.x = 0;
    key.body.velocity.y = 0;
    wall.kill();
}

PlayState._createHud = function () {
    const NUMBERS_STR = '0123456789X ';
    this.coinFont = this.game.add.retroFont('font:numbers', 20, 26,
        NUMBERS_STR);

    this.keyIcon = this.game.make.image(0, 19, 'icon:key');
    this.keyIcon.anchor.set(0, 0.5);

    let coinIcon = this.game.make.image(this.keyIcon.width + 7, 0, 'icon:coin');
    let coinScoreImg = this.game.make.image(coinIcon.x + coinIcon.width,
    coinIcon.height / 2, this.coinFont);
    coinScoreImg.anchor.set(0, 0.5);

    this.hud = this.game.add.group();
    //this.hud.add(coinIcon);
    //this.hud.add(coinScoreImg);
    if (level_haskey == true && this.level > 1){
        this.hud.add(this.keyIcon);
    }
    this.hud.position.set(10, 10);
};

// =============================================================================
// entry point
// =============================================================================

window.onload = function () {
    let game = new Phaser.Game(960, 600, Phaser.AUTO, 'game');
    game.state.add('play', PlayState);
    game.state.start('play', true, false, {level: 1});
};
