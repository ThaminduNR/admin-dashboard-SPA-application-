import {Item} from "../models/item.js";
import {saveItem, getAllItems, updateItem,deleteItem} from "../db/db2.js";

export class ItemController{
    constructor() {
       $("#item-add-btn").click(this.handleSaveItem.bind(this));
       $("#item-update-btn").click(this.handleUpdateItem.bind(this));
       $("#item-delete-btn").click(this.handleDeleteItem.bind(this));
       this.handleLoadItem();
       this.itemTableSelectedRaw();

    }

    handleLoadItem(){
        let item_data = getAllItems();
        $('#item-Table tbody').empty();

        item_data.map((result, index) => {
            const row = "<tr>" + "<td>" +
                result._itemId +
                "</td>" + "<td>" +
                result._name +
                "</td>" + "<td>" +
                result._qty +
                "</td>" + "<td>" +
                result._price +
                "</td>" + "</tr>";
            $("#item-Table tbody").append(row);
        });
    }

    handleSaveItemValidation(){

    }

    handleSaveItem(){
        console.log("Item-added");
        let item_id = $("#item_ID").val();
        let item_name = $("#item_Name").val();
        let item_qty = $("#item_qty").val();
        let item_price = $("#price").val();

        let item = new Item(item_id,item_name,item_qty,item_price);
        saveItem(item);
        this.handleLoadItem();
        this.clearFields();


    }

    handleUpdateItem(){
        let item_id = $("#item_ID").val();
        let item_name = $("#item_Name").val();
        let item_qty = $("#item_qty").val();
        let item_price = $("#price").val();

        let item = new Item(item_id,item_name,item_qty,item_price);
        updateItem(item);
        this.handleLoadItem();
        this.clearFields();
    }

    handleDeleteItem(){
        let item_id = $("#item_ID").val();
        let item_name = $("#item_Name").val();
        let item_qty = $("#item_qty").val();
        let item_price = $("#price").val();

        let item = new Item(item_id,item_name,item_qty,item_price);
        deleteItem(item);
        this.handleLoadItem();
        this.clearFields();
    }

    itemTableSelectedRaw(){
        $("#item-Table").on("click", "tr", function (event) {
            console.log($(event.target).text());
            let id = $(this).children().eq(0).text();
            let name = $(this).children().eq(1).text();
            let qty = $(this).children().eq(2).text();
            let price = $(this).children().eq(3).text();

            $("#item_ID").val(id);
            $("#item_Name").val(name);
            $("#item_qty").val(qty);
            $("#price").val(price);
        });
    }

    clearFields(){
        $("#item_ID").val("");
        $("#item_Name").val("");
        $("#item_qty").val("");
        $("#price").val("");
    }

}

new ItemController();


