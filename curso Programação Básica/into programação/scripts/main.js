var myImage = document.querySelector('img');

myImage.onclick = function (){
    var mySrc = myImage.getAttribute('src');

    if(mySrc === "images/wondicon-ui-free-website_111210.png"){
        myImage.setAttribute('src', "images/site-png-3.png")
    }else{
        myImage.setAttribute('src', "images/wondicon-ui-free-website_111210.png")
    }
}