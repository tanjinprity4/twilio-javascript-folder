function ellipseArt(x,y,w,h) {
    // Base Case
    if (w < 1) {
        return;
    }
    ellipse(x, y, w, h);
    // Recursive call 
    ellipseArt(x, y, w/3, h/3);
}

function triArt(x1, y1, x2, y2, x3, y3) {
    // Base Case
    if (x1 < 1 || x2 < 1 || x3 < 1) {
        return;
    }
    triangle(x1, y1, x2, y2, x3, y3);
    // Recursive call 
    triArt(x1, y3 + (y1 - y3)/3, x2/3, y3 + 2*(y1 - y3)/3, x3, y3);
}

function rectArt(x,y,w,h) {
    // Base Case
    if (w < 1) {
        return;
    }
    rect(x, y, w, h);
    // Recursive call 
    rectArt(x+15, y+15, w/3, h/3);
    rectArt(x+15, y+15, w/2, h/2);
}

// Bachground
background(243, 245, 186);

// Randomize color
var c = Math.random()*255;

// Randomize length
var l = Math.random()*400;

fill(c, 144, 191);
ellipseArt(300,300,l,l);
fill(125, c, 137);
triArt(100, 300, 300, 300, 200, 150);
fill(242, 14, 79);
rectArt(200,0,l,150);
fill(125, 185, c);
ellipseArt(100,50,150,200);



