export function romanToInteger(str) {
    const romanSymbols = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let maxLength = str.length - 1;
    str = [...str];
    let result = maxLength >= 1 ? romanSymbols[str[0]] : 0;

    while (maxLength > 0) {
        result += romanSymbols[str[maxLength]];

        if (romanSymbols[str[maxLength]] > romanSymbols[str[maxLength - 1]]) {
            result -= romanSymbols[str[maxLength - 1]];
            maxLength--;
        }

        maxLength--;
    }

    return result;
}
