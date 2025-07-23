const v0 = [-1763083394,-2147483647];
const v3 = `
    class C6 extends v0.constructor {
        7 = 8.421959965099472;
    }
`;
for (let i9 = 0, i10 = 10; i9 < i10; i10--) {
}
const v17 = v3.split(8);
for (let i20 = 0, i21 = 10;
    (() => {
        const v22 = i20 < i21;
        return v22 || v22;
    })();
    i21--) {
}
function f29(a30, a31, a32) {
    return a32;
}
const v33 = f29();
function F34(a36, a37, a38, a39) {
    if (!new.target) { throw 'must be called with new'; }
    try { a39.constructor(v17); } catch (e) {}
}
Object.defineProperty(F34, "constructor", { enumerable: true, value: runString });
new F34(v33, f29, v33, F34);
gc();
