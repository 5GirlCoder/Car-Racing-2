canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
car1_width = 200;
car1_height = 60;

car2_width = 200;
car2_height = 60;

car1_x = 10;
car1_y = 80;

car2_x = 10;
car2_y = 10;
var background_img = "racing.jpg";
var car1_img = "C1.jpg";
var car2_img = "C2.jpg";

function add()
{
    background_imgTag = new Image();
    background_imgTag.onload = uploadbackground;
    background_imgTag.src = background_img;

    car1_imgTag = new Image();
    car1_imgTag.onload = uploadcar1;
    car1_imgTag.src = car1_img;

    car2_imgTag = new Image();
    car2_imgTag.onload = uploadcar2;
    car2_imgTag.src = car2_img;

}

function uploadbackground()
{
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1()
{
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

function uploadcar2()
{
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
    keypressed = e.keyCode;
    console.log(keypressed);

    if (keypressed == '38')
    {
        up();
        console.log("up");
    }

    if (keypressed == '40')
    {
        down();
        console.log("down");
    }

    if (keypressed == '37')
    {
        left();
        console.log("left");
    }
    
    if (keypressed == '39')
    {
        right();
        console.log("right");
    }
}

function up()
{
    if (car1_y >= 0)
    {
        car1_y = car1_y - 10;
        console.log("When up pressed, x = " + car1_x);
        console.log("When up pressed, y = " + car1_y);
        uploadbackground();
        uploadcar1();
    }
}

function down()
{
    if (car1_y <= 500)
    {
        car1_y = car1_y + 10;
        console.log("When up pressed, x = " + car1_x);
        console.log("When up pressed, y = " + car1_y);
        uploadbackground();
        uploadcar1();
    }
}

function right()
{
    if (car1_x <= 700)
    {
        car1_x = car1_x + 10;
        console.log("When up pressed, x = " + car1_x);
        console.log("When up pressed, y = " + car1_y);
        uploadbackground();
        uploadcar1();
    }
}

function left()
{
    if (car1_x >= 0)
    {
        car1_x = car1_x - 10;
        console.log("When up pressed, x = " + car1_x);
        console.log("When up pressed, y = " + car1_y);
        uploadbackground();
        uploadcar1();
    }
}