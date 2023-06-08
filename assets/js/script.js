$(".toggle-btn").click(() => {
  $(".side-bar").css({ left: "0" });
  $(".toggle-btn").css({ display: "none" });
  $("#toggle-btn-close").css({ display: "block" });
});

$("#toggle-btn-close").click(() => {
  $(".side-bar").css({ left: "-250px" });
  $(".toggle-btn").css({ display: "block" });
  $("#toggle-btn-close").css({ display: "none" });
});

$("#customer").click(() => {
  console.log(event);
  $("#customerForm").css({ display: "block" });
  $("#productForm").css({ display: "none" });
  $("#placeOrderForm").css({ display: "none" });
});
$("#product").click(() => {
  console.log("Hello click");
  $("#customerForm").css({ display: "none" });
  $("#productForm").css({ display: "block" });
  $("#placeOrderForm").css({ display: "none" });
});
$("#placeOrder").click(() => {
  $("#customerForm").css({ display: "none" });
  $("#productForm").css({ display: "none" });
  $("#placeOrderForm").css({ display: "block" });
});


