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
for (let i20 = 0, i21 = 10; i20 < i21; i21--) {
}
for (let i30 = -3, i31 = 10; i30 < i31; i31--) {
}
Uint32Array[v7] = f3;
const v40 = `
    const o41 = {
        [Symbol]: Uint8ClampedArray,
    };
    /m[\cA](?<!)\u{12345}1(?<a>(?<b>(?<c>(?<d>.).).).)*/dysu;
`;
const v43 = v40.split(8);
v43[1] = Uint32Array;
const v44 = [2.0,-4.0];
function f45(a46, a47, a48) {
    return v7;
}
const v49 = f45(f45, Symbol, f45);
function F50(a52, a53, a54, a55) {
    if (!new.target) { throw 'must be called with new'; }
    try { a55.constructor(v43); } catch (e) {}
}
Object.defineProperty(F50, "constructor", { enumerable: true, value: runString });
new F50(v44, f45, v49, F50);
gc();
