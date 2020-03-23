$(document).ready(() => {
  let disableAllButtons = function() {
    $(".link-project, .link-source").on("click", false);
  };

  disableAllButtons();

  $(".tile-overlay").on("click", function() {
    disableAllButtons();
    setTimeout(() => {
      $(".link-project, .link-source", this).off("click");
    }, 500);
  });

  $(".tile-overlay").hover(function() {
    setTimeout(() => {
      $(".link-project, .link-source", this).off("click");
    }, 500);
  }, disableAllButtons);
});
