fetch("header.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("header-doc").innerHTML = data;
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
  fetch("./components/Rating/rating.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("rating").innerHTML = data;
  });
  fetch("./components/Grid/grid.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("grid").innerHTML = data;
  });
  fetch("./components/Modal/modal.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("modal").innerHTML = data;
  });
  fetch("./components/Toast/toast.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("toast").innerHTML = data;
  });
  fetch("./components/List/list.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("list").innerHTML = data;
  });
  fetch("./components/Text-Utilities/text-utilities.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("text-utilities").innerHTML = data;
  });
  fetch("./components/Navigation/navigation.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("navigation").innerHTML = data;
  });
  fetch("./components/Slider/slider.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("slider").innerHTML = data;
  });
  