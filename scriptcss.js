
    $(document).ready(function () {

  // Change Flex Direction
  $("#flexDirection").change(function () {
    let direction = $(this).val();
    $("#flexContainer").css("flex-direction", direction);
  });

  // Change Justify Content
  $("#justifyContent").change(function () {
    let justify = $(this).val();
    $("#flexContainer").css("justify-content", justify);
  });

});
