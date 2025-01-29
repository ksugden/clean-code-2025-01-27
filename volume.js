export class Volume{
    constructor(quantity, volumeUnit) {
        this.quantity = quantity
        this.volumeUnit = volumeUnit
    }

    toBaseUnit(){
        let baseUnitCount = this.quantity
        let volumeUnit = this.volumeUnit

        while (volumeUnit) {
            baseUnitCount = baseUnitCount * volumeUnit.quantity
            volumeUnit = volumeUnit.volumeUnit
        }
        return new Volume(baseUnitCount, new Volume(1))
    }
    
    equals(other){
        return this.toBaseUnit().quantity == other.toBaseUnit().quantity
    }

    add(other){
        const addition = other.toBaseUnit().quantity + this.toBaseUnit().quantity
        return new Volume(addition, new Volume(1))
    }
}

export const TEASPOON = new Volume(1)
export const TABLESPOON = new Volume(3, TEASPOON)
export const OZ = new Volume(2, TABLESPOON)
export const CUP = new Volume(8, OZ)
export const PINT = new Volume(2, CUP)
export const QUART = new Volume(2, PINT)
export const GALLON = new Volume(4, QUART)
export const ANOTHER_GALLON = new Volume(8, PINT)