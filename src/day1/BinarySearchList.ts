// binary search requires a sorted list
export default function bs_list(haystack: number[], needle: number): boolean {
    let startIndex = 0;
    let endIndex = haystack.length;

    do {
        const middleIndex = Math.floor(
            startIndex + (endIndex - startIndex) / 2,
        );
        const value = haystack[middleIndex];
        if (value === needle) {
            return true;
        }
        if (value < needle) {
            startIndex = middleIndex + 1;
        } else if (value > needle) {
            endIndex = middleIndex;
        }
    } while (startIndex < endIndex);
    
    return false;
}
