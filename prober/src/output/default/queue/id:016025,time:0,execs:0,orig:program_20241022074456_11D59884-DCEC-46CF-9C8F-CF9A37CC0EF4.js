function f1() {
    return BigUint64Array;
}
Object.defineProperty(BigUint64Array, 1, { get: f1 });
for (let i4 = 0, i5 = 10; i4 < i5; i5--) {
}
const o12 = {
};
o12.constructor.values(BigUint64Array);
gc();
