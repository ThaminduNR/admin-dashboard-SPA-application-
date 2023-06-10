import {Order} from "../models/order.js";
import {getAllItems, getCustomerDB} from "../db/db2.js";




export class OrderController{
   constructor() {
      $("#itemIdSet").on('change',(event)=>{
         console.log(event.target.value);
         this.handleItemDetail(event.target.value);
      });
      this.handleLoadIds();
   }

   handleLoadIds(){
      getCustomerDB().map(value => {
         $('#custIdSet').append("<option>"+ value._custId+"</option>")
      });

      getAllItems().map(value => {
         $('#itemIdSet').append("<option>"+ value._itemId+"</option>")
      });
   }

   handleItemDetail(id){
      getAllItems().map(value => {
         if (value._itemId === id){
            $("#itemName").val(value._name);
            $("#avQty").val(value._qty);
            $("#unitPrice").val(value._price);
         }
      });
   }
}
new OrderController();