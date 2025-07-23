class C1 {
}
function f3() {
    const v4 = `
        C1 = this;
    `;
    return v4;
}
const v7 = Symbol.toPrimitive;
for (let i10 = 0, i11 = 10; i10 < i11; i11--) {
}
for (let i20 = 0, i21 = 10; i20 < i21; --i21) {
}
for (let i30 = -3, i31 = 10; i30 < i31; i31--) {
}
Uint32Array[v7] = f3;
const v40 = `
    const o41 = {
        [Symbol]: Uint8ClampedArray,
    };
`;
const v42 = v40.split(8);
v42[1] = Uint32Array;
const v43 = [2.0,-4.0];
function f44(a45, a46, a47) {
    return a46;
}
const v48 = f44();
function F49(a51, a52, a53, a54) {
    if (!new.target) { throw 'must be called with new'; }
    try { a54.constructor(v42); } catch (e) {}
}
Object.defineProperty(F49, "constructor", { enumerable: true, value: runString });
new F49(v43, f44, v48, F49);
gc();
