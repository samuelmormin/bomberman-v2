var Player = function(posX, posY, wall_size, game)
{
    this.posX            = posX;
    this.posY            = posY;
    this.wall_size       = wall_size;
    this.avatar          = "assets/img/avatar.svg";
    this.walls_positions = game.walls_positions;
    this.greenlight      = false;
    
    this.test_walls = function(direction, context)
    {
        if(direction == 'right')
        {
            //get the current position
            console.log('current X position is : '+context.posX);
            console.log('current Y position is : '+context.posY);
            console.log('  ');
            
            //calculate the next positions
            var next_posX = context.posX + context.wall_size;
            var next_posY = context.posY;
            
            //display the next positions
            console.log('next posX is : '+next_posX);
            console.log('next posY is : '+next_posY);
            console.log('  ');
            
            for(var i = 0 ; i < context.walls_positions.length ; i++)
            {
                var getX = context.walls_positions[i].posX;
                console.log('x'+getX);
                var getY = context.walls_positions[i].posY;
                console.log('y'+getY);
                if(next_posX == context.walls_positions[i].posX && next_posY == context.walls_positions[i].posY)
                {
                    context.greenlight = false;
                    console.log('false');
                    console.log(context.walls_positions[i].posX);
                }
                else
                {
                    context.greenlight = true;
                    console.log('true');
                }
            }
        }
        
        else if(direction == 'down')
        {
            //get the current position
            console.log('current X position is : '+context.posX);
            console.log('current Y position is : '+context.posY);
            console.log('  ');
            
            //calculate the next positions
            var next_posX = context.posX;
            var next_posY = context.posY + context.wall_size;
            
            //display the next positions
            console.log('next posX is : ' + next_posX);
            console.log('next posY is : ' + next_posY);
            console.log('  ');
            
            for(var i = 0 ; i < context.walls_positions.length ; i++)
            {
                if(next_posX == context.walls_positions[i].posX && next_posY == context.walls_positions[i].posY)
                {
                    context.greenlight == false;
                    console.log('false');
                    console.log('brick : '+ context.walls_positions[i].posX);
                    console.log('brick : '+ context.walls_positions[i].posY);
                }
                else
                {
                    context.greenlight == true;
                    console.log('true');
                }
            }
        }
    }
    

    
    this.player_moves = function()
    {
        
        var get_player    = document.querySelector(".player");
        var posX          = this.posX;
        var posY          = this.posY;
        var _this         = this;
        var get_direction = '';
        
        document.addEventListener("keydown", function()
        {
            keyValue     = event.keyCode;
            //console.log(keyValue);
            
            // If RIGHT key is pressed
            if(keyValue == '39')
            {
                
                get_direction = 'right';
                
                _this.test_walls(get_direction, _this);
                
                if(_this.greenlight == true)
                {
                    posX = posX + wall_size;
                    _this.posX = posX;
                    console.log('X : '+_this.posX);
                    console.log('Y : '+_this.posY);
                    get_player.style.transform = 'translateX('+ posX +'px) translateY('+ posY +'px)';
                }
                else
                {
                    console.log('you dont move');
                }
                
//                if(posX <= wall_size * 13 && _this.greenlight = true)
//                {
//                    console.log('i can move');
//                    get_player.style.transform = 'translateX('+ posX +'px) translateY('+ posY +'px)';
//                }
//                else if(posX > wall_size*13)
//                {
//                    posX = wall_size*13;
//                    get_player.style.transform = 'translateX('+ posX +'px) translateY('+ posY +'px)';
//                    
//                    //console.log('x13='+posX);
//                }
                //console.log('posXx='+posX);
                //console.log('posYy='+posY);
            }
            
            // If DOWN key is pressed
            else if(keyValue == '40')
            {
                get_direction = 'down';
                
                _this.test_walls(get_direction, _this);
                
                if(_this.greenlight = true)
                {
                    posY = posY + wall_size;
                    _this.posY = posY;
                    console.log('X : '+_this.posX);
                    console.log('Y : '+_this.posY);
                    get_player.style.transform = 'translateX('+ posX +'px) translateY('+ posY +'px)';
                }
                else
                {
                    console.log('you dont move');
                }                
            }   
            
            
            // If LEFT key is pressed
//            if(keyValue == '37')
//            {
//                get_direction = 'left';
//                _this.test_walls(directions, _this);
//                posX = posX - wall_size;
//                
//                if(posX >= wall_size)
//                {
//                    get_player.style.transform = 'translateX('+ posX +'px) translateY('+ posY +'px)';
//                    this.posX = posX;
//                }
//                else if(posX < wall_size)
//                {
//                    posX = wall_size;
//                    get_player.style.transform = 'translateX('+ posX +'px) translateY('+ posY +'px)';
//                }
//            }
//            
//            // If UP key is pressed
//            else if(keyValue == '38')
//            {
//
//                
//                posY = posY - wall_size;
//                //console.log('after click posY='+posY);
//                
//                if(posY >= wall_size)
//                {
//                    //console.log('up');
//                    get_player.style.transform = 'translateX('+ posX +'px) translateY('+ posY +'px)';
//                    //console.log('posX='+posX);
//                    //console.log('posY='+posY);
//                }
//                else if(posY < wall_size)
//                {
//                    posY = wall_size;
//                    get_player.style.transform = 'translateX('+ posX +'px) translateY('+ posY +'px)';
//                    
//                }
//                //console.log('posX='+posX);
//                //console.log('posY='+posY);
//            }
            
            
                   
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
        for(var i =0; i<this.walls_positions.length; i++)
        {
            console.log('x : '+this.walls_positions[i].posX); 
            console.log('y : '+this.walls_positions[i].posY);
        }
        var size = this.walls_positions.length;
        console.log('length = '+size);
   }
   this.walls_console();
}