function changeImage() {
    let image = document.getElementById('bulb');
    if (image.src.match("bulbon")) {
      image.src = "";
    } else {
      image.src = "";
    }
  }