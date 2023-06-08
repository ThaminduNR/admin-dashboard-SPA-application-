export class Customer {
  constructor(custId, fName, lname, address) {
    this._custId = custId;
    this._fName = fName;
    this._lname = lname;
    this._address = address;
  }

  get custId() {
    return this._custId;
  }

  set custId(value) {
    this._custId = value;
  }

  get fName() {
    return this._fName;
  }

  set fName(value) {
    this._fName = value;
  }

  get lname() {
    return this._lname;
  }

  set lname(value) {
    this._lname = value;
  }

  get address() {
    return this._address;
  }

  set address(value) {
    this._address = value;
  }
}
