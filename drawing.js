function ellipseArt(x,y,w,h) {
    // Base Case
    if (w < 1) {
        return;
    }
    ellipse(x, y, w, h);
    // Recursive call 
    ellipseArt(x, y, w/3, h/3);
}

function alienHair(x1,y1,x2,y2) {
    // Base Case
    if (x1 > 240) {
        return;
    }
    line(x1,y1,x2,y2);
    // Recursive call 
    alienHair(x1+2,y1,x2+3,y2);
}

function drawAlien(c,e) {
    // Face
    fill(31, c, 153);
    bezier(150, 200, 50, 100, 300, 50, 250, 200);
    bezier(150, 200, 50, 300, 300, 200, 250, 200);

    // Eyes
    fill(245, 245, 245);
    ellipseArt(170, 160, e, 30);
    ellipseArt(210, 160, e, 30);

    // Pupil
    ellipseArt(170, 160, e/10, 10);
    ellipseArt(210, 160, e/10, 10);

    // Nose
    fill(10,10,c);
    triangle(180, 200, 200, 200, 190, 170);

    // Mouth
    fill(c, 14, c);
    bezier(170, 210, 100, 280, 220, 200, 210, 210);

    // hair
    alienHair(145, 120, 120, 80);
}


// Background
background(199, 179, 199);

// Randomize color
var c = Math.random()*255;
// Randomize eyes
var e = Math.random()*70;
drawAlien(c,e);
