var Player = function(posX, posY, wall_size, game)
{
    this.posX            = posX;
    this.posY            = posY;
    this.wall_size       = wall_size;
    this.avatar          = "assets/img/avatar.svg";
    this.walls_positions = game.walls_positions;
    this.greenlight      = '';
    
    this.player_moves = function()
    {
        var get_player    = document.querySelector(".player");
        var _this         = this;
        var get_direction = '';
        var next_posX = 0;
        var next_posY = 0;
        
        document.addEventListener("keydown", function()
        {
            keyValue      = event.keyCode;
            
            // If LEFT key is pressed
            if(keyValue == '37')
            {
                get_direction = 'left';
                console.log(get_direction);
                
                next_posX = _this.posX - _this.wall_size;
                next_posY = _this.posY;
                
                for(let i = 0 ; i < _this.walls_positions.length ; i++)
                {
                    if(_this.walls_positions[i].posX = next_posX && _this.walls_positions[i].posY = next_posY)
                    {
                        _this.greenlight = false;
                        break;
                    }
                    else
                    {
                        _this.greenlight = true;
                    }   
                }
                
                if(_this.greenlight == false)
                {
                    console.log('dont go right');
                    get_player.style.transform = 'translateX('+ _this.posX +'px) translateY('+ _this.posY +'px)';

                }
                else
                {
                    _this.posX = next_posX;
                    _this.posY = next_posY;
                    get_player.style.transform = 'translateX('+ _this.posX +'px) translateY('+ _this.posY +'px)';
                }
            }
            
            // If UP key is pressed
            if(keyValue == '38')
            {
                get_direction = 'up';
                console.log(get_direction);
                
                next_posX = _this.posX;
                next_posY = _this.posY - _this.wall_size;

                
                for(let i = 0 ; i < _this.walls_positions.length ; i++)
                {
                    if(_this.walls_positions[i].posX = next_posX && _this.walls_positions[i].posY = next_posY)
                    {
                        _this.greenlight = false;
                        break;
                    }
                    else
                    {
                        _this.greenlight = true;
                    }   
                }
                
                if(_this.greenlight == false)
                {
                    console.log('dont go up');
                    get_player.style.transform = 'translateX('+ _this.posX +'px) translateY('+ _this.posY +'px)';

                }
                else
                {
                    _this.posX = next_posX;
                    _this.posY = next_posY;
                    get_player.style.transform = 'translateX('+ _this.posX +'px) translateY('+ _this.posY +'px)';
                }
            }
            
            // If RIGHT key is pressed
            if(keyValue == '39')
            {
                get_direction = 'right';
                console.log(get_direction);
                
                next_posX = _this.posX + _this.wall_size;
                next_posY = _this.posY;

                
                for(let i = 0 ; i < _this.walls_positions.length ; i++)
                {
                    if(_this.walls_positions[i].posX = next_posX && _this.walls_positions[i].posY = next_posY)
                    {
                        _this.greenlight = false;
                        break;
                    }
                    else
                    {
                        _this.greenlight = true;
                    }   
                }
                
                if(_this.greenlight == false)
                {
                    console.log('dont go right');
                    get_player.style.transform = 'translateX('+ _this.posX +'px) translateY('+ _this.posY +'px)';

                }
                else
                {
                    _this.posX = next_posX;
                    _this.posY = next_posY;
                    get_player.style.transform = 'translateX('+ _this.posX +'px) translateY('+ _this.posY +'px)';
                }
            }

            
            // If DOWN key is pressed
            else if(keyValue == '40')
            {
                get_direction = 'down';
                console.log(get_direction);
                
                next_posX = _this.posX;
                next_posY = _this.posY + _this.wall_size;

                
                for(let i = 0 ; i < _this.walls_positions.length ; i++)
                {
                    if(_this.walls_positions[i].posX = next_posX && _this.walls_positions[i].posY = next_posY)
                    {
                        _this.greenlight = false;
                        break;
                    }
                    else
                    {
                        _this.greenlight = true;
                    }   
                }
                
                if(_this.greenlight == false)
                {
                    console.log('dont go up');
                    get_player.style.transform = 'translateX('+ _this.posX +'px) translateY('+ _this.posY +'px)';

                }
                else
                {
                    _this.posX = next_posX;
                    _this.posY = next_posY;
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
        console.log('length = '+size);
   }
   this.walls_console();
}