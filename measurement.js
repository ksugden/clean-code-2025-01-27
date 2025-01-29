import Type from "./measurementType"

export class Measurement{
    constructor(quantity, MeasurementUnit, type) {
        this.quantity = quantity
        this.MeasurementUnit = MeasurementUnit
        this.type = MeasurementUnit? MeasurementUnit.type : type
    }

    toBaseUnit(){
        let baseUnitCount = this.quantity
        let MeasurementUnit = this.MeasurementUnit

        while (MeasurementUnit) {
            baseUnitCount = baseUnitCount * MeasurementUnit.quantity
            MeasurementUnit = MeasurementUnit.MeasurementUnit
        }
        return new Measurement(baseUnitCount, new Measurement(1, null, this.type))
    }
    
    equals(other){
        return this.toBaseUnit().quantity == other.toBaseUnit().quantity
    }

    add(other){
        if (this.type == other.type){
            const addition = other.toBaseUnit().quantity + this.toBaseUnit().quantity
            return new Measurement(addition, new Measurement(1))
        } else{
            throw new TypeError('Cannot add these units');
        }

    }
}

// VolumeUnits
export const TEASPOON = new Measurement(1, null, Type.Volume)
export const TABLESPOON = new Measurement(3, TEASPOON)
export const OZ = new Measurement(2, TABLESPOON)
export const CUP = new Measurement(8, OZ)
export const PINT = new Measurement(2, CUP)
export const QUART = new Measurement(2, PINT)
export const GALLON = new Measurement(4, QUART)
export const ANOTHER_GALLON = new Measurement(1, GALLON)
export const ANOTHER_ANOTHER_GALLON = new Measurement(8, PINT)

//LengthUnits
export const INCH = new Measurement(1, null, Type.Length)
export const FOOT = new Measurement(12, INCH)
export const YARD = new Measurement(3, FOOT)
export const FURLONG = new Measurement(220, YARD)
export const MILE = new Measurement(8, FURLONG)
