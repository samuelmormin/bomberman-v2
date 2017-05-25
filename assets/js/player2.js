var Player = function(posX, posY, wall_size, game)
{
    this.posX            = posX;
    this.posY            = posY;
    this.wall_size       = wall_size;
    this.avatar          = "assets/img/avatar.svg";
    this.walls_positions = game.walls_positions;
    this.greenlight      = '';
    
    this.test_walls = function(direction, context)
    {
        if(direction == 'left')
        {
            //calculate the next positions
            var next_posX = context.posX - context.wall_size;
            var next_posY = context.posY;
            
            for(let i = 0 ; i < context.walls_positions.length ; i++)
            {
                if(context.walls_positions[i].posX == next_posX && context.walls_positions[i].posY == next_posY)
                {
                    context.greenlight = false;
                    break;
                }
                else
                {
                    context.greenlight = true;
                }
            }
        }
        else if(direction == 'up')
        {
            //calculate the next positions
            var next_posX = context.posX;
            var next_posY = context.posY - context.wall_size;

          
            
            for(let i = 0 ; i < context.walls_positions.length ; i++)
            {
                if(context.walls_positions[i].posX == next_posX && context.walls_positions[i].posY == next_posY)
                {
                    context.greenlight = false;
                    break;
                }
                else
                {
                    context.greenlight = true;
                }
            }
        }
        else if(direction == 'right')
        {
            //calculate the next positions
            var next_posX = context.posX + context.wall_size;
            var next_posY = context.posY;

            
            for(let i = 0 ; i < context.walls_positions.length ; i++)
            {
                if(context.walls_positions[i].posX == next_posX && context.walls_positions[i].posY == next_posY)
                {
                    context.greenlight = false;
                    console.log('no right ?');
                    break;
                }
                else
                {
                    console.log('right');
                    context.greenlight = true;
                }
            }
        }
        else if(direction == 'down')
        {
            
            //calculate the next positions
            var next_posX = context.posX;
            var next_posY = context.posY + context.wall_size;
            
            for(let i = 0 ; i < context.walls_positions.length ; i++)
            {
                if(context.walls_positions[i].posX == next_posX && context.walls_positions[i].posY == next_posY)
                {
                    context.greenlight = false;
                    break;
                }
                else
                {
                    context.greenlight = true;
                }
            }
        }
    }
    
    
    this.player_moves = function()
    {
        var get_player    = document.querySelector(".player");
        var _this         = this;
        var get_direction = '';
        
        document.addEventListener("keydown", function()
        {
            keyValue      = event.keyCode;
            
            // If LEFT key is pressed
            if(keyValue == '37')
            {
                get_direction = 'left';
                console.log(get_direction);
                
                _this.test_walls(get_direction, _this);
                
                if(_this.greenlight == false)
                {
                    console.log('dont go left');
                }
                else
                {
                    _this.posX = _this.posX - _this.wall_size;
                    _this.posY = _this.posY;
                    get_player.style.transform = 'translateX('+ _this.posX +'px) translateY('+ _this.posY +'px)';
                }
            }
            
            // If UP key is pressed
            else if(keyValue == '38')
            {
                get_direction = 'up';
                console.log(get_direction);
                
                _this.test_walls(get_direction, _this);
                
                if(_this.greenlight == false)
                {
                    console.log('dont go up');
                }
                else
                {
                    _this.posX = _this.posX;
                    _this.posY = _this.posY - _this.wall_size;
                    get_player.style.transform = 'translateX('+ _this.posX +'px) translateY('+ _this.posY +'px)';
                }
            }
            
            // If RIGHT key is pressed
            else if(keyValue == '39')
            {
                get_direction = 'right';
                console.log(get_direction);
                
                _this.test_walls(get_direction, _this);
                
                if(_this.greenlight == false)
                {
                    console.log('dont go right');
                }
                else
                {
                    _this.posX = _this.posX + _this.wall_size;
                    _this.posY = _this.posY;
                    get_player.style.transform = 'translateX('+ _this.posX +'px) translateY('+ _this.posY +'px)';
                }
            }

            
            // If DOWN key is pressed
            else if(keyValue == '40')
            {
                get_direction = 'down';
                console.log(get_direction);
                
                _this.test_walls(get_direction, _this);
                
                if(_this.greenlight == false)
                {
                    console.log('dont go up');
                }
                else
                {
                    _this.posX = _this.posX;
                    _this.posY = _this.posY + _this.wall_size;
                    get_player.style.transform = 'translateX('+ _this.posX +'px) translateY('+ _this.posY +'px)';
                }
            }
        });  
    }
    
    this.generate_player = function(posX, posY)
    {
        var create_player = document.createElement("div");
        create_player.classList.add("player");
        create_player.style.width = this.posX+"px";
        create_player.style.height = this.posX+"px";
        create_player.style.transform = 'translateX('+ this.posX +'px) translateY('+ this.posY +'px)';
        create_player.innerHTML = '<img class="avatar" src="'+ this.avatar +'" alt="Tupac">';
        document.querySelector(".game-set").appendChild(create_player);
    }
    
   this.walls_console = function()
   {
        for(let i =0; i<this.walls_positions.length; i++)
        {
            console.log('x : '+this.walls_positions[i].posX); 
            console.log('y : '+this.walls_positions[i].posY);
        }
        var size = this.walls_positions.length;
        console.log(this.walls_positions);
   }
   this.walls_console();
}