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

// Volume(2, Volume(3, TEASPOONS)) = 3 TEASPOONS x 2 = (v1.quantity * v2.quantity , v2.unit)

// Volume(2, Volume(4, Volume(5, Volume(1)))) = 2 * 4 * 5 * TEASPOONS