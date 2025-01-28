export class Volume{
    constructor(quantity, unit) {
        this.quantity = quantity
        this.unit = unit
    }

    equals(other){
        return this.quantity == other.quantity && this.unit == other.unit;

    }
}