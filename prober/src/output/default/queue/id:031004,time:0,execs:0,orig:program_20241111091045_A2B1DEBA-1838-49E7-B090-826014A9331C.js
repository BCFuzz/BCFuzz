const v0 = [-41386,65536,-2147483648,4294967295,1073741825,-256,-39590,34751];
class C2 {
}
function f4() {
    const v5 = `
        C2 = this;
    `;
    return v5;
}
const v8 = Symbol.toPrimitive;
for (let i11 = 0, i12 = 10; i11 < i12; i12--) {
}
for (let i21 = 0, i22 = 10; i21 < i22; --i22) {
}
for (let i31 = -3, i32 = 10; i31 < i32; i32--) {
}
Uint32Array[v8] = f4;
const v41 = `
    const o42 = {
        9: v0,
        [Symbol]: Uint8ClampedArray,
    };
`;
const v43 = v41.split(8);
v43[1] = Uint32Array;
const v44 = [2.0,-4.0];
function f45(a46, a47, a48) {
    return 8;
}
const v49 = f45();
function F50(a52, a53, a54, a55) {
    if (!new.target) { throw 'must be called with new'; }
    try { a55.constructor(v43); } catch (e) {}
}
Object.defineProperty(F50, "constructor", { enumerable: true, value: runString });
new F50(v44, f45, v49, F50);
gc();
