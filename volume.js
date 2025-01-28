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
}

export const TEASPOON = new Volume(1)
export const TABLESPOON = new Volume(3, TEASPOON)
export const OZ = new Volume(2, TABLESPOON)
