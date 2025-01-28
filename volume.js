export class Volume{
    constructor(quantity, volumeBaseUnit) {
        this.quantity = quantity
        this.volumeBaseunit = volumeBaseUnit
    }

    equals(other){
        return this.quantity == other.quantity && this.volumeBaseunit == other.unit;
    }
}


export const TEASPOON = new Volume(1, new Volume())
export const TABLESPOON = new Volume(3, TEASPOON)
export const CUP = new Volume(3, TEASPOON)