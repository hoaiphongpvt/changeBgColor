var changeColor = document.querySelector('html')
function changeBgColor() {
    var color = document.getElementById('color').value
    changeColor.style.backgroundColor = color
    if (changeColor.style.backgroundColor != color) {
        alert("Bạn đã nhập sai. Xin mời nhập lại!")
    }
}

    

