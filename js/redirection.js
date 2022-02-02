fetch("header.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("header-doc").innerHTML = data;
  });
  fetch("/sidebar.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("sidebar").innerHTML = data;
  });
  fetch("/footer.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("footer-doc").innerHTML = data;
  });
  fetch("./components/Alert/alert.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("alert").innerHTML = data;
  });
fetch("./components/Avatar/avatar.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("avatar").innerHTML = data;
  });
  fetch("./components/Badge/badge.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("badge").innerHTML = data;
  });
  
  fetch("./components/Button/button.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("button-com").innerHTML = data;
  });
  fetch("./components/Card/card.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("card").innerHTML = data;
  });
  fetch("./components/Image/image.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("image-com").innerHTML = data;
  });
  fetch("./components/Input/input.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("input-com").innerHTML = data;
  });
  