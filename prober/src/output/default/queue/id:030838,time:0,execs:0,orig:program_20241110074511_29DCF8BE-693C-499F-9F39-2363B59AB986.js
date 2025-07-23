class C0 {
}
function f2() {
    const v3 = `
        C0 = this;
    `;
    return v3;
}
const v6 = Symbol.toPrimitive;
for (let i9 = 0, i10 = 10; i9 < i10; i10--) {
}
for (let i19 = 0, i20 = 65537; i19 < i20; i20--) {
}
for (let i29 = -3, i30 = 10; i29 < i30; i30--) {
}
Uint32Array[v6] = f2;
const v39 = `
    const o41 = {
        __proto__: Symbol,
        [Symbol]: 1073741824,
    };
`;
const v42 = v39.split(8);
v42[1] = Uint32Array;
const v43 = [2.0,-4.0];
function f44(a45, a46, a47) {
    return a47;
}
const v48 = f44(C0, v6, runString);
function F49(a51, a52, a53, a54) {
    if (!new.target) { throw 'must be called with new'; }
    try { a54.constructor(v42); } catch (e) {}
}
Object.defineProperty(F49, "constructor", { enumerable: true, value: runString });
new F49(v43, f44, v48, F49);
gc();
