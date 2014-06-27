console.log("Click a picture to enlarge");

function showImage(imgName) {
	document.getElementById('largeImg').src = imgName;
	showLargeImagePanel();
	unselectAll();
}
function showLargeImagePanel() {
    document.getElementById('largeImgPanel').style.visibility = 'visible';
    
    document.getElementById('body').style.background = '#ccc';
    document.getElementById('largeImgPanel').style.width  = '300px';

}
function unselectAll() {
    if(document.selection) document.selection.empty();
    if(window.getSelection) window.getSelection().removeAllRanges();
    document.getElementById('body').style.background = "url(../img/greenBackground.jpg)";
}
function hideMe(obj) {
    obj.style.visibility = 'hidden';
}