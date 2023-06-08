import {Customer} from "../models/customer.js";
import {saveCustomerDB,getCustomerDB,updateCustomer,deleteCustomer} from "../db/db2.js";

export class CustomerController{
   constructor() {

     $("#btn_add").click(this.handleSaveCustomerValidation.bind(this));
     $("#btn_update").click(this.handleUpdateCustomer.bind(this));
     $("#btn_delete").click(this.handleDeleteCustomer.bind(this));
     this.handleLoadCustomer();
     this.tableSelectedRaw();

   }
   handleLoadCustomer(){
     let customer_data_arr = getCustomerDB();
     $('#custTbl tbody').empty();

     console.log(customer_data_arr);

     customer_data_arr.map((result, index) => {
       const row = "<tr>" + "<td>" +
           result._custId +
           "</td>" + "<td>" +
           result._fName +
           "</td>" + "<td>" +
           result._lname +
           "</td>" + "<td>" +
           result._address +
           "</td>" + "</tr>";
       $("#custTbl tbody").append(row);
     });

   }

   handleSaveCustomerValidation(){

     var customer_id = $("#customer_id").val();
     var customer_first_name = $("#first_name").val();
     var customer_last_name = $("#last_name").val();
     var customer_address = $("#customer_address").val();

     const regexNumber= /^\d+$/;
     if (!regexNumber.test(customer_id)){
       alert("Invalid Id");
     }else if(!customer_first_name){
       alert("Invalid First Name");
     }else if(!customer_last_name){
       alert("Invalid Last Name");
     }else if(!customer_address){
       alert("Invalid Address");
     }else {
       this.handleSaveCustomer();
     }

   }


  handleSaveCustomer(){
    console.log("Handel save");
    var customer_id = $("#customer_id").val();
    var customer_first_name = $("#first_name").val();
    var customer_last_name = $("#last_name").val();
    var customer_address = $("#customer_address").val();

    let new_customer = new Customer(customer_id,customer_first_name,customer_last_name,customer_address);
    saveCustomerDB(new_customer);
    this.handleLoadCustomer();
    this.clearTextField();

  }



  handleUpdateCustomer(){
    console.log("Handel Update");

    let customer_id = $("#customer_id").val();
    let customer_first_name = $("#first_name").val();
    let customer_last_name = $("#last_name").val();
    let customer_address = $("#customer_address").val();

    let customer = new Customer(customer_id,customer_first_name,customer_last_name,customer_address);
    updateCustomer(customer);
    this.handleLoadCustomer();
    this.clearTextField();

  }


  handleDeleteCustomer(){
    console.log("Handel Delete");

    let customer_id = $("#customer_id").val();
    let customer_first_name = $("#first_name").val();
    let customer_last_name = $("#last_name").val();
    let customer_address = $("#customer_address").val();

    let customer  = new Customer(customer_id,customer_first_name,customer_last_name,customer_address);
    deleteCustomer(customer);
    this.handleLoadCustomer();
    this.clearTextField();

  }


  tableSelectedRaw(){
    $("#custTbl").on("click", "tr", function (event) {
      console.log($(event.target).text());
      let id = $(this).children().eq(0).text();
      let fname = $(this).children().eq(1).text();
      let lname = $(this).children().eq(2).text();
      let address = $(this).children().eq(3).text();

      $("#customer_id").val(id);
      $("#first_name").val(fname);
      $("#last_name").val(lname);
      $("#customer_address").val(address);
    });
  }

  clearTextField(){
    $("#customer_id").val("");
    $("#first_name").val("");
    $("#last_name").val("");
    $("#customer_address").val("");
  }
}
new CustomerController();
//---------------------------------------------------------













