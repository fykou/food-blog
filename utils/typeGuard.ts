/**
 * Checks if the value is of the type T by checking if a property exists in the value
 *
 * @param value object to check
 * @param property string
 * @returns value is Type
 *
 * @example typeGuard<SomeType>(value, 'someProperty')
 */
export default function typeGuard<T>(value: any, property: string): value is T {
	return value.hasOwnProperty(property) || false
}
