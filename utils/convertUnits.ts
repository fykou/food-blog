import { Unit } from './enums'
import { convertToFraction } from './toFraction'

export function convertUnits(
    unit: Unit,
    amount: number,
    toMetric: boolean,
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
            } else {
                targetUnit = Unit.tsp
                convertedAmount = amount
            }
            break
        case Unit.tbsp:
            if (toMetric) {
                targetUnit = Unit.tbsp
                convertedAmount = amount
            } else {
                targetUnit = Unit.tbsp
                convertedAmount = amount
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
                convertedAmount = amount
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
                convertedAmount = amount / 250
                if (convertedAmount % 1 !== 0) {
                    convertedAmount = convertToFraction(convertedAmount)
                }
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
            }
            break
        case Unit.l:
            if (toMetric) {
                targetUnit = Unit.l
                convertedAmount = amount
            } else {
                targetUnit = Unit.cup
                convertedAmount = amount / 250
            }
            break
    }

    const converted = { unit: targetUnit as Unit, amount: convertedAmount.toString() }
    return { converted, original }
}
