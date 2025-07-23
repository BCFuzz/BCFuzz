function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = new F0();
for (let i6 = 5, i7 = 10; i6 < i7;) {
    i7--;
    Object.defineProperty(v3, 2363, { enumerable: true, get: parseFloat });
}
gc();
