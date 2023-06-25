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

$("#dashboard").click(() => {
  console.log(event);
  $("#dashboardForm").css({ display: "block" });
  $("#customerForm").css({ display: "none" });
  $("#productForm").css({ display: "none" });
  $("#placeOrderForm").css({ display: "none" });
});

$("#customer").click(() => {
  console.log(event);
  $("#customerForm").css({ display: "block" });
  $("#productForm").css({ display: "none" });
  $("#placeOrderForm").css({ display: "none" });
  $("#dashboardForm").css({ display: "none" });
});
$("#product").click(() => {
  console.log("Hello click");
  $("#customerForm").css({ display: "none" });
  $("#productForm").css({ display: "block" });
  $("#placeOrderForm").css({ display: "none" });
  $("#dashboardForm").css({ display: "none" });
});
$("#placeOrder").click(() => {
  $("#customerForm").css({ display: "none" });
  $("#productForm").css({ display: "none" });
  $("#placeOrderForm").css({ display: "block" });
  $("#dashboardForm").css({ display: "none" });
});

//chart patterns
const ctx =  $("#chart").get(0).getContext('2d');
const myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["Sunday", "Monday", "Tuesday",
      "Wednesday", "Thursday", "Friday", "Saturday"],
    datasets: [{
      label: 'Last week',
      backgroundColor: 'rgba(161, 198, 247, 1)',
      borderColor: 'rgb(47, 128, 237)',
      data: [3000, 4000, 2000, 5000, 8000, 9000, 2000],
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
        }
      }]
    }
  },
});