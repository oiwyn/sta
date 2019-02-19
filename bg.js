var imgCount = 3;
function changeIMG(){
        var dir = 'img/';
        var randomCount = Math.round(Math.random() * (imgCount - 1)) + 1;
        var img = new Array
                img[1] = "1.jpg",
                img[2] = "2.jpg",
                img[3] = "3.jpg"
        document.getElementById("img").style.backgroundImage = "url(" + dir + img[randomCount] + ")";
}