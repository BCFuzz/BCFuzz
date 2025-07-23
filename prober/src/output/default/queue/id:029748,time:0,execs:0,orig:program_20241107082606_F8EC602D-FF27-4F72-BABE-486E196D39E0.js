function f1() {
    return "MAX_VALUE";
}
for (let i4 = 0, i5 = 2520; i5; i5--) {
}
for (let i14 = -3, i15 = 10; 8 < i15; i15--) {
}
let v22 = Float64Array;
let v23 = 8;
[v22,v23,v23] = "source";
const v25 = `
    do {
    } while ((() => {
            const v28 = 0 < 6;
            Object.defineProperty(v22, "MAX_VALUE", { writable: true, configurable: true, get: f1 });
            return v28;
        })())
`;
const v29 = v25.split(v23);
const v30 = [2.0,-4.0];
function f31(a32, a33, a34) {
    return a33;
}
const v35 = f31(f31, f1, f31);
function F36(a38, a39, a40, a41) {
    if (!new.target) { throw 'must be called with new'; }
    try { a41.constructor(v29); } catch (e) {}
}
new F36(v30, f31, v35, F36);
gc();
