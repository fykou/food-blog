import { useEffect, useState } from 'react'

export const useLocalStorage = <T>(key: string, initialValue: T) => {
    const [storedValue, setStoredValue] = useState<T>(initialValue)
    const [initialRender, setInitialRender] = useState(true)

    const setValue = (value: T) => {
        window.localStorage.setItem(key, JSON.stringify(value))
    }

    useEffect(() => {
        const value = window.localStorage.getItem(key)

        if (value) {
            const parsed = JSON.parse(value) as T
            setStoredValue(parsed)
        }
    }, [])

    useEffect(() => {
        if (!initialRender) {
            setValue(storedValue)
        } else {
            setInitialRender(false)
        }
    }, [storedValue])

    return [storedValue, setStoredValue] as const
}
