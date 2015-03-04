function show_image(src, width) {
    var pics = document.getElementById("pics");
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    //img.height = height;
    //img.alt = alt;

    // This next line will just add it to the <body> tag
    pics.appendChild(img);
}

show_image("./images/2014-Bots.jpg",500,100);
show_image("./images/shooter.jpg",500,100);

Galleria.loadTheme('galleria/themes/classic/galleria.classic.min.js');
Galleria.run('.galleria');