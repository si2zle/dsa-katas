// searches step by step through the array to see if the value at each index is a match
export default function linear_search(
    haystack: number[],
    needle: number,
): boolean {
    for (const element of haystack) {
        if (element === needle) {
            return true;
        }
    }
    return false;
}
