export class  item {

    constructor(productId,name,qty,price) {
        this._productId = productId;
        this._name = name;
        this._qty = qty;
        this._price = price;
    }

    get productId() {
        return this._productId;
    }

    set productId(productId) {
        this._productId = productId;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    get qty() {
        return this._qty;
    }

    set qty(qty) {
        this._qty = qty;
    }

    get price() {
        return this._price;
    }

    set price(price) {
        this._price = price;
    }



}