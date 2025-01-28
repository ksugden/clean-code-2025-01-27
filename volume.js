export class Volume{
    constructor(quantity, volumeUnit) {
        this.quantity = quantity
        this.volumeUnit = volumeUnit
    }

    countBaseUnits(){
        let baseUnitCount = this.quantity
        let volumeUnit = this.volumeUnit

        while (volumeUnit) {
            baseUnitCount = baseUnitCount * volumeUnit.quantity
            volumeUnit = volumeUnit.volumeUnit
        }
        return baseUnitCount
    }
    
    equals(other){
        return this.countBaseUnits() == other.countBaseUnits()
    }

    add(other){
        const addition = other.countBaseUnits() + this.countBaseUnits()
        return new Volume(addition, TEASPOON)
    }
}

export const TEASPOON = new Volume(1)
export const TABLESPOON = new Volume(3, TEASPOON)
export const OZ = new Volume(2, TABLESPOON)
export const CUP = new Volume(8, OZ)
export const PINT = new Volume(2, CUP)
export const QUART = new Volume(2, PINT)
export const GALLON = new Volume(4, QUART)