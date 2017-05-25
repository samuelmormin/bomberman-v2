// This class handles the generation of unbreakable walls
var Wall = function(posX, posY, size)
{
    //The X and Y positions of the wall
    this.posX = posX;
    this.posY = posY;
    
    // Size corresponds to the wall's sides size.
    this.size = size; 
    
    // This method creates and displays the wall element on the game-set
    this.display_wall = function()
    {
        var create_wall = document.createElement("div");
        create_wall.classList.add("wall");
        create_wall.style.width = this.size+"px";
        create_wall.style.height = this.size+"px";
        create_wall.style.transform = 'translateX('+ this.posX +'px) translateY('+ this.posY +'px)';
        document.querySelector(".game-set").appendChild(create_wall);
    }
}