import { expect, test } from "bun:test"


function isPalindrome(sequence: string): boolean {
    const length = sequence.length
    return sequence[0] == sequence[length - 1]
}


test('abc', () => {
    const result = isPalindrome('abc')
    expect(result).toBe(false)
})

test('aba', () => {
    const result = isPalindrome('aba')
    expect(result).toBe(true)
})
