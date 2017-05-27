// This class creates the player and displays it on the game-set
// It also handles the interactions with the game-set(bombs, destroying walls...)
var player = function(posX, posY, index_i, index_j, size)
{
    this.posX           = posX;
    this.posY           = posY;
    this.index_i        = 1;
    this.index_j        = 1;
    this.size           = size;
    this.bomb_dropped   = [];
    this.life           = 3;
    
    // Creates and displays the player dom element
    this.generate_player = function()
    {
        this.create_player = document.createElement("div");
        this.create_player.classList.add("player");
        //create_player.style.width = this.posX+"px";
        //create_player.style.height = this.posX+"px";
        this.create_player.style.transform = 'translateX('+ displayed_set.bricks_properties[this.index_i][this.index_j].posX +'px) translateY('+ displayed_set.bricks_properties[this.index_i][this.index_j].posY +'px)';
        document.querySelector(".game-set").appendChild(this.create_player);
    }
    
    // Handles the player's moves
    // Keycodes : 37 = LEFT, 38 = UP, 39 = RIGHT, 40 = DOWN
    this.player_moves = function()
    {
        // It's necessary to stock the current element to use it
        // If we dont, we won't be abble to access to it because of the callback (addEventListener)
        var _this = this;
        
        //This callback will listen to the events and apply the functions corresponding to the key pressed
        document.addEventListener("keydown", function()
        {
            keyValue = event.keyCode;
            
            // LEFT
            if(keyValue == '37')
            {
                if(displayed_set.bricks_properties[_this.index_i][_this.index_j-1].breakable == null)
                {
                    _this.index_j -= 1;
                    _this.create_player.style.transform = 'translateX('+ displayed_set.bricks_properties[_this.index_i][_this.index_j].posX +'px) translateY('+ displayed_set.bricks_properties[_this.index_i][_this.index_j].posY +'px)';
                    _this.create_player.className = "player animation-left";
                }
            }
            
            // UP
            if(keyValue == '38')
            {
                if(displayed_set.bricks_properties[_this.index_i-1][_this.index_j].breakable == null)
                {
                    _this.index_i -= 1;
                    _this.create_player.style.transform = 'translateX('+ displayed_set.bricks_properties[_this.index_i][_this.index_j].posX +'px) translateY('+ displayed_set.bricks_properties[_this.index_i][_this.index_j].posY +'px)';
                    _this.create_player.className = "player animation-up";
                }
            }
            
            // RIGHT
            else if(keyValue == '39')
            {
                if(displayed_set.bricks_properties[_this.index_i][_this.index_j + 1].breakable == null)
                {
                    _this.index_j += 1;
                    _this.create_player.style.transform = 'translateX('+ displayed_set.bricks_properties[_this.index_i][_this.index_j].posX +'px) translateY('+ displayed_set.bricks_properties[_this.index_i][_this.index_j].posY +'px)';
                    _this.create_player.className = "player animation-right";
                }
            }
            
            // DOWN
            if(keyValue == '40')
            {
                if(displayed_set.bricks_properties[_this.index_i+1][_this.index_j].breakable == null)
                {
                    _this.index_i += 1;
                    _this.create_player.style.transform = 'translateX('+ displayed_set.bricks_properties[_this.index_i][_this.index_j].posX +'px) translateY('+ displayed_set.bricks_properties[_this.index_i][_this.index_j].posY +'px)';
                    _this.create_player.className = "player animation-down";
                }
            }
        });
    }
    
    
    
    
    
    
    console.log('ok1'); 
    // Drop a bomb
    this.drop_bomb = function()
    {
        // stock the current element
        var _this = this;
        console.log('ok2');
        // callback to listen the events
        document.addEventListener("keydown", function()
        {
            // space Key value = 32
            keyValue = event.keyCode;
//            console.log(keyValue);
            
            if( keyValue == 32 )
            {
                var bomb_index_i = _this.index_i;
                var bomb_index_j = _this.index_j;
                var bomb_dropped = document.createElement("div");
                bomb_dropped.className = "bomb animation-bomb";
                bomb_dropped.style.transform = 'translateX('+ displayed_set.bricks_properties[_this.index_i][_this.index_j].posX +'px) translateY('+ displayed_set.bricks_properties[_this.index_i][_this.index_j].posY +'px)';
                _this.bomb_dropped.push(bomb_dropped);
                document.querySelector(".game-set").appendChild(bomb_dropped);
                
                
                
            var element = document.querySelector('.bomb');
                    var x = 0;

                function loop() {
                    element.className = "bomb animation-bomb" +x;
                }

                var setInterval_player = window.setInterval(function () {
                    loop()
                    x++
                }, 1000);

                window.setTimeout(function () {
                    clearInterval(setInterval_animation);
                }, 6000)
                                };
                            }); 
                        }
                    };
    


var player_1 = new player(30, 30, 30);
player_1.generate_player();
player_1.player_moves();
player_1.drop_bomb();