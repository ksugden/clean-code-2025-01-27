export class Volume{
    constructor(quantity, volumeBaseUnit) {
        this.quantity = quantity
        this.unit = volumeBaseUnit
    }

    equals(other){
        return this.quantity == other.quantity && this.unit == other.unit;
    }
}


export const TEASPOON = new Volume(1, new Volume())
export const TABLESPOON = new Volume(3, TEASPOON)
export const CUP = new Volume(3, TEASPOON)