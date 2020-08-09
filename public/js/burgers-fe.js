$(document).ready(function () {
  const addBurger = $(".btn-primary");
  const inputBurger = $(".burger-input");
  const updateDevour = $(".btn-outline-secondary");
  const inputDevour = $(".burger-update");

  addBurger.on("click", function (event) {
    event.preventDefault();
    const burgers = {
      burger: inputBurger.val().trim(),
    };

    if (!burgers.burger) {
      return;
    }
    postBurger(burgers);
    inputBurger.val("");
  });

  updateDevour.on("click", function (event) {
    event.preventDefault();
    console.log(inputDevour);
    const dev = {
      id: inputDevour.data("id")
    };

    if (!dev.id) {
      return;
    }
    putDevour(dev);
    inputBurger.val("");
  });

  function postBurger(burgers) {
    console.log("posting");
    $.post("/api/burger", {
      burger: burgers.burger
    }).then(function (data) {
      location.reload();
    })
      .catch(handleLoginErr);
  }

  function putDevour(dev) {
    console.log("puting");
    $.post("/api/devour", {
      id: dev.id
    }).then(function (data) {
      location.reload();
    })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
