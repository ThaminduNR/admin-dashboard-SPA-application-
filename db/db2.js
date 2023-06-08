const data = "DATA";


//--------------customer parts--------------------
export function saveCustomerDB(new_customer){
    let pre_data = localStorage.getItem(data);
    console.log("ARR: ", pre_data);

    let data_arr = [];
    // undefine/ null/ "" / false
    if (pre_data) {
        data_arr = JSON.parse(pre_data);
    }
    data_arr.push(new_customer);
    localStorage.setItem(data, JSON.stringify(data_arr));
}

export function getCustomerDB(){
    let pre_data = localStorage.getItem(data);
    let data_arr = [];

    // undefine/ null/ "" / false
    if (pre_data) {
        data_arr = JSON.parse(pre_data);
    }
    return data_arr;
}

export function updateCustomer(customer){

    let customer_data_arr = getCustomerDB();
    let index = customer_data_arr.findIndex((value) => value._custId ===customer._custId);
    // if (index > -1) {
    //     console.log(customer_data_arr[index]);
    //     customer_data_arr[index].id = $("#customer_id").val();
    //     customer_data_arr[index].customer_first_name = $("#first_name").val();
    //     customer_data_arr[index].customer_last_name = $("#last_name").val();
    //     customer_data_arr[index].customer_address = $("#customer_address").val();
    //     localStorage.setItem(data, JSON.stringify(customer_data_arr));
    // }

    customer_data_arr[index]= customer;
    localStorage.setItem(data,JSON.stringify(customer_data_arr));
}

export function deleteCustomer(customer){
    let customer_data_arr = getCustomerDB();

    let index = customer_data_arr.findIndex((value) => value._custId === customer._custId);
    console.log(index);
    customer_data_arr.splice(index, 1);
    localStorage.setItem(data, JSON.stringify(customer_data_arr));
}