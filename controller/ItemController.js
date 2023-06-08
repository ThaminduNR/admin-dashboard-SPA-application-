import {item} from "../models/item.js";


//send data local Storage
const p_data = "PRODUCT_DATA";

var product_arr = [];

function loadData() {
    let pre_data = localStorage.getItem(p_data);
    console.log(pre_data);
    let product_data_arr = JSON.parse(pre_data);
    console.log(product_data_arr);

    $("table tbody tr").remove();

    product_data_arr.map((result, index) => {
        var row =
            "<tr>" +
            "<td>" +
            result.product_id +
            "</td>" +
            "<td>" +
            result.product_name +
            "</td>" +
            "<td>" +
            result.product_qty +
            "</td>" +
            "<td>" +
            result.product_price +
            "</td>" +
            "</tr>";
        $("#pTable tbody").append(row);
    });
}

$("#btn_padd").click(function () {

    var product_id = $("#product_ID").val();
    var product_name = $("#product_Name").val();
    var product_qty = $("#product_qty").val();
    var product_price = $("#price").val();


    let pre_data = localStorage.getItem(p_data);
    console.log("ARR: ", pre_data);

    let data_arr = [];

    // undefine/ null/ "" / false
    if (pre_data) {
        data_arr = JSON.parse(pre_data);
    }

    var obj = {
        product_id: product_id,
        product_name: product_name,
        product_qty: product_qty,
        product_price: product_price,
    };

    data_arr.push(obj);
    console.log(data_arr);
    localStorage.setItem(p_data, JSON.stringify(data_arr));
    loadData();
});
