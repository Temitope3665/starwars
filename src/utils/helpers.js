export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

export function findSum(array) {
    return array.reduce((a, b) => a + b, 0)
};