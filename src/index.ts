export const sum = (arr: number[]): number => {
    return arr.reduce((a, b) => a + b);
};

export const sum2 = (...args: number[]): number => {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    }
    return sum;
};

export const multi = (a: number, b: number): number => {
    return a * b;
};
