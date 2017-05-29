// This class creates the player and displays it on the game-set
// It also handles the interactions with the game-set(bombs, destroying walls...)
var a_i_player = function(posX, posY, index_i, index_j, size)
{
    this.posX           = posX;
    this.posY           = posY;
    this.index_i        = 13;
    this.index_j        = 13;
    this.size           = size;
    this.bomb_dropped   = [];
    this.life_count     = 3;
    this.direction;
    this.bomb_in_action = false;
    this.bombs_dropped = [];
    
    // Creates and displays the player dom element
    this.generate_player = function()
    {
        this.create_a_i_player = document.createElement("div");
        this.create_a_i_player.classList.add("a-i-player");
        //create_player.style.width = this.posX+"px";
        //create_player.style.height = this.posX+"px";
        this.create_a_i_player.style.transform = 'translateX('+ displayed_set.bricks_properties[this.index_i][this.index_j].posX +'px) translateY('+ displayed_set.bricks_properties[this.index_i][this.index_j].posY +'px)';
        document.querySelector(".game-set").appendChild(this.create_a_i_player);  
    }
    
    this.get_direction = function()
    {
        var _this = this;
        
        var directions = [];
        
        // LEFT
        if( displayed_set.bricks_properties[ _this.index_i ][ _this.index_j - 1 ].breakable == null ) directions.push("left");
        
        // UP
        if( displayed_set.bricks_properties[ _this.index_i - 1 ][ _this.index_j ].breakable == null ) directions.push("up");
        
        // RIGHT
        if( displayed_set.bricks_properties[ _this.index_i ][ _this.index_j + 1 ].breakable == null ) directions.push("right");
        
        // DOWN
        if( displayed_set.bricks_properties[ _this.index_i + 1 ][ _this.index_j ].breakable == null ) directions.push("down");
        
        _this.direction = directions[Math.floor((Math.random() * directions.length-1) + 1)];
        
        return _this.direction;
    }
    
    
    this.auto_moves = function()
    {
        var _this = this;
        
        console.log('auto move again');
        
        if(_this.bomb_in_action == false)
        { 
            if( this.get_direction() == 'left')
            {
                this.drop_bomb();
                this.move_left(_this, 1);
            }
            else if( this.get_direction() == 'up')
            {
                this.drop_bomb();
                this.move_up(_this, 1);
            }
            else if( this.get_direction() == 'right')
            {
                this.drop_bomb();
                this.move_right(_this, 1);
            }
            else if( this.get_direction() == 'down')
            {
                this.drop_bomb();
                this.move_down(_this, 1);
            }
        }
        setTimeout(function()
        {
            return _this.auto_moves();
        }, 7000);
    }

   -
                                    console.log('man la');
                    console.log( bomb_index_j);

                    _this.bombs_dropped[0].element.classList.add("explosion");
                    _this.bombs_dropped[0].element.classList.remove("bomb");

                }, 3000);
                    
                    // After bomb animation, tests and deletes the walls
                setTimeout(function()
                {
//                    var bomb_index_i = bomb_index_i;
//                    var bomb_index_j = _this.bombs_dropped[0].index_j;
                    console.log(bomb_index_i +''+bomb_index_j);
                    console.log(displayed_set.bricks_properties[ bomb_index_i ][ bomb_index_j + 1 ]);
                    
                    // Delete breakable brick to the RIGHT
                    if(displayed_set.bricks_properties[ bomb_index_i ][ bomb_index_j + 1 ].breakable == true)
                    {
                        console.log('breakable');
                        displayed_set.bricks_properties[ bomb_index_i ][ bomb_index_j + 1 ].breakable = null;
                        displayed_set.bricks_properties[ bomb_index_i ][ bomb_index_j + 1 ].element.style.opacity = "0";
                        displayed_set.bricks_properties[ bomb_index_i ][ bomb_index_j + 1 ].element.classList.remove("breakable");
                        displayed_set.bricks_properties[ bomb_index_i ][ bomb_index_j + 1 ].element.classList.add("empty", "brick-boom");
                        displayed_set.bricks_properties[ bomb_index_i ][ bomb_index_j + 1 ].element.style.opacity = "1";
                    }
                    
                    // Delete breakable brick to the LEFT
                    if(displayed_set.bricks_properties[ bomb_index_i ][ bomb_index_j - 1 ].breakable == true)
                    {
                                                console.log('breakable');

                        displayed_set.bricks_properties[ bomb_index_i ][ bomb_index_j - 1 ].breakable = null;  
                        displayed_set.bricks_properties[ bomb_index_i ][ bomb_index_j - 1 ].element.style.opacity = "0";
                        displayed_set.bricks_properties[ bomb_index_i ][ bomb_index_j - 1 ].element.classList.remove("breakable");
                        displayed_set.bricks_properties[ bomb_index_i ][ bomb_index_j - 1 ].element.classList.add("empty", "brick-boom");
                        displayed_set.bricks_properties[ bomb_index_i ][ bomb_index_j - 1 ].element.style.opacity = "1";
                    }
                    
                    // Delete breakable brick to the BOTTOM
                    if( displayed_set.bricks_properties[ bomb_index_i + 1 ][ bomb_index_j ].breakable == true)
                    {
                                                console.log('breakable');

                        displayed_set.bricks_properties[ bomb_index_i + 1 ][ bomb_index_j ].breakable = null;
                        displayed_set.bricks_properties[ bomb_index_i + 1 ][ bomb_index_j ].element.style.opacity = "0";
                        displayed_set.bricks_properties[ bomb_index_i + 1 ][ bomb_index_j ].element.classList.remove("breakable");
                        displayed_set.bricks_properties[ bomb_index_i + 1 ][ bomb_index_j ].element.classList.add("empty", "brick-boom");
                        displayed_set.bricks_properties[ bomb_index_i + 1 ][ bomb_index_j ].element.style.opacity = "1";
                    }
                    
                    // Delete breakable brick to the TOP
                    if( displayed_set.bricks_properties[ bomb_index_i ][ bomb_index_j ].breakable == true)
                    {
                                                console.log('breakable');

                        displayed_set.bricks_properties[ bomb_index_i - 1 ][ bomb_index_j ].breakable = null;
                        displayed_set.bricks_properties[ bomb_index_i - 1 ][ bomb_index_j ].element.style.opacity = "0";
                        displayed_set.bricks_properties[ bomb_index_i - 1 ][ bomb_index_j ].element.classList.remove("breakable");
                        displayed_set.bricks_properties[ bomb_index_i - 1 ][ bomb_index_j ].element.classList.add("empty", "brick-boom");
                        displayed_set.bricks_properties[ bomb_index_i - 1 ][ bomb_index_j ].element.style.opacity = "1";
                    }
                
                    // Delete bomb
                    _this.bombs_dropped.pop();
                    
                    _this.bomb_in_action = false;
                    
                    console.log(_this);
                        
                    //_this.life_check(_this, bomb_index_i, bomb_index_j);
    
                        
                }, 3500);   
            }
        
    }
    
//    this.life_check = function(current_object, bomb_i, bomb_j)
//    {
//        if(current_object.posX == displayed_set.bricks_properties[ bomb_i ][ bomb_j ].posX && current_object.posY == displayed_set.bricks_properties[ bomb_i ][ bomb_j ].posY)
//        {
//            current_object.life_count -= 1;
//            console.log(current_object.life_count);
//            
//            if(current_object.life_count == 0)
//            {
//                var end_of_game = document.createElement("div");
//                end_of_game.classList.add("end-of-game");
//                end_of_game.innerHTML = "T'AS PERDU PUTEUH";
//                document.querySelector(".game-set").appendChild(end_of_game);
//            }
//        }
//    }
    
    // Move LEFT
    this.move_left = function(current, step)
    {
        setTimeout(function()
        {
            current.posX = displayed_set.bricks_properties[ current.index_i ][ current.index_j - step ].posX;
            current.posY = displayed_set.bricks_properties[ current.index_i ][ current.index_j - step ].posY;
            current.create_a_i_player.style.transform = 'translateX('+ current.posX +'px) translateY('+ current.posY +'px)';
            current.index_i = displayed_set.bricks_properties[ current.index_i ][ current.index_j - step ].index_i;
            current.index_j = displayed_set.bricks_properties[ current.index_i ][ current.index_j - step ].index_j;
        }, 100);
    }
    
    // Move UP
    this.move_up = function(current, step)
    {
        current.posX = displayed_set.bricks_properties[ current.index_i - step ][ current.index_j ].posX;
        current.posY = displayed_set.bricks_properties[ current.index_i - step ][ current.index_j ].posY;
        current.create_a_i_player.style.transform = 'translateX('+ current.posX +'px) translateY('+ current.posY +'px)';
        current.index_i = displayed_set.bricks_properties[ current.index_i - step ][ current.index_j ].index_i;
        current.index_j = displayed_set.bricks_properties[ current.index_i - step ][ current.index_j ].index_j;
    }
    
    // Move RIGHT
    this.move_right = function(current, step)
    {
        current.posX = displayed_set.bricks_properties[ current.index_i ][ current.index_j + step ].posX;
        current.posY = displayed_set.bricks_properties[ current.index_i ][ current.index_j + step ].posY;
        current.create_a_i_player.style.transform = 'translateX('+ current.posX +'px) translateY('+ current.posY +'px)';
        current.index_i = displayed_set.bricks_properties[ current.index_i ][ current.index_j + step ].index_i;
        current.index_j = displayed_set.bricks_properties[ current.index_i ][ current.index_j + step ].index_j;    
    }
    
    // Move DOWN
    this.move_down = function(current, step)
    {
        current.posX = displayed_set.bricks_properties[ current.index_i + step ][ current.index_j ].posX;
        current.posY = displayed_set.bricks_properties[ current.index_i + step ][ current.index_j ].posY;
        current.create_a_i_player.style.transform = 'translateX('+ current.posX +'px) translateY('+ current.posY +'px)';
        current.index_i = displayed_set.bricks_properties[ current.index_i + step ][ current.index_j ].index_i;
        current.index_j = displayed_set.bricks_properties[ current.index_i + step ][ current.index_j ].index_j; 
    }
}

var player_2 = new a_i_player(30, 30, 30);
player_2.generate_player();
player_2.auto_moves();