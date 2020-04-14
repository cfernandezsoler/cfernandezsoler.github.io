$(document).ready(() => {
  $(".btn").on("click", function() {
    let btn = $(this).attr("id");
    let btnType = btn.length > 2 ? btn[btn.length - 3] : "a";
    let btnID = btn.length > 0 ? btn[btn.length - 1] : 1;

    let imgTarget = ".img-" + btnType;
    let lastUrl = $(imgTarget).attr("src");
    let newUrl = "media/guitars/guitar-" + btnType + "-" + btnID + ".png";

    if (lastUrl == newUrl) return;

    $(imgTarget).fadeOut(400, function() {
      $(imgTarget).attr("src", newUrl);
      $(imgTarget).fadeIn();
    });
  });
});
