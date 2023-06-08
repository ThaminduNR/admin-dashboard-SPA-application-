export class  Item {

    constructor(itemId,name,qty,price) {
        this._itemId = itemId;
        this._name = name;
        this._qty = qty;
        this._price = price;
    }

    get itemId() {
        return this._itemId;
    }

    set  itemId(itemId) {
        this._itemId = itemId;
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