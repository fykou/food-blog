import { Unit } from './enums'
import { convertToFraction } from './toFraction'

function mround(n: number, multiple: number) {
    return Math.round(n / multiple) * multiple
}

const toCup = (amount: number) => {
    if (amount % 1 !== 0) {
        let wholeNumber: number = Math.floor(amount)
        const restDec = amount - wholeNumber
        let rest: number
        restDec <= 0.25 ? (rest = mround(restDec, 0.125)) : (rest = mround(restDec, 0.25))
        if (rest <= 0) rest = 0.125
        while (rest >= 1) {
            wholeNumber++
            rest--
        }
        if (wholeNumber === 0) return convertToFraction(rest)
        if (rest === 0) return wholeNumber.toString()
        return (wholeNumber ? wholeNumber.toString() + ' + ' : '') + convertToFraction(rest)
    }
    return amount
}

export function convertUnits(
    unit: Unit,
    amount: number,
    toMetric: boolean,
    ingredient?: string,
): { converted: { unit: Unit; amount: string }; original: { unit: Unit; amount: string } } {
    if (isNaN(amount) || !amount) {
        return { converted: { unit: Unit.other, amount: '' }, original: { unit: Unit.other, amount: '' } }
    }
    const original = { unit: unit, amount: amount.toString() }

    if (unit === Unit.other) {
        return { converted: original, original }
    }

    let targetUnit: Unit, convertedAmount: string | number

    switch (unit) {
        case Unit.tsp:
            if (toMetric) {
                targetUnit = Unit.tsp
                convertedAmount = amount
                if (amount < 1){
                    convertedAmount = convertToFraction(amount)
                }
            } else {
                targetUnit = Unit.tsp
                convertedAmount = amount
                if (amount < 1){
                    convertedAmount = convertToFraction(amount)
                }
            }
            break
        case Unit.tbsp:
            if (toMetric) {
                targetUnit = Unit.tbsp
                convertedAmount = amount
                if (amount < 1){
                    convertedAmount = convertToFraction(amount)
                }
            } else {
                targetUnit = Unit.tbsp
                convertedAmount = amount
                if (amount < 1){
                    convertedAmount = convertToFraction(amount)
                }
            }
            break
        case Unit.ounce:
            if (toMetric) {
                targetUnit = Unit.g
                convertedAmount = amount * 30
            } else {
                targetUnit = Unit.ounce
                convertedAmount = amount
            }
            break
        case Unit.cup:
            if (toMetric) {
                targetUnit = Unit.g
                convertedAmount = amount * 250
            } else {
                targetUnit = Unit.cup
                convertedAmount = toCup(amount)
            }
            break
        case Unit.g:
            if (toMetric) {
                if (amount >= 1000) {
                    targetUnit = Unit.kg
                    convertedAmount = amount / 1000
                } else {
                    targetUnit = Unit.g
                    convertedAmount = amount
                }
            } else {
                targetUnit = Unit.cup
                convertedAmount = toCup(amount / 250)
            }
            break
        case Unit.kg:
            if (toMetric) {
                if (amount < 1) {
                    targetUnit = Unit.g
                    convertedAmount = amount * 1000
                } else {
                    targetUnit = Unit.kg
                    convertedAmount = amount
                }
            } else {
                targetUnit = Unit.cup
                convertedAmount = amount / (250 * 1000)
            }
            break
        case Unit.ml:
            if (toMetric) {
                targetUnit = Unit.ml
                convertedAmount = amount
            } else {
                targetUnit = Unit.tsp
                convertedAmount = amount / 5
                if (convertedAmount > 5) {
                    targetUnit = Unit.cup
                    convertedAmount = toCup(amount / 250)
                }
            }
            break
        case Unit.l:
            if (toMetric) {
                targetUnit = Unit.l
                convertedAmount = amount
            } else {
                targetUnit = Unit.cup
                convertedAmount = toCup(amount / 250)
            }
            break
        default:
            convertedAmount = ""
            targetUnit = Unit.other
            break
    }

    const converted = { unit: targetUnit, amount: convertedAmount.toString() }
    return { converted, original }
}
