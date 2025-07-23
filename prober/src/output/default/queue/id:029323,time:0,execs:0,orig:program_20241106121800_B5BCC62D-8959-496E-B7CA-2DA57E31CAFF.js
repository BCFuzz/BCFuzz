for (let i2 = -1, i3 = 10; -1 < i3; i3--) {
}
for (let i12 = -3, i13 = 10; i12 < i13; i13--) {
}
const v23 = `
    const v25 = new Uint8Array();
    for (const v26 in v25) {
    }
`;
const v27 = v23.split(8);
v27[1] = Uint32Array;
const v28 = [2.0,-4.0];
function f29(a30, a31, a32) {
    return a31;
}
const v33 = f29(f29, v23, f29);
function F34(a36, a37, a38, a39) {
    if (!new.target) { throw 'must be called with new'; }
    try { a39.constructor(v27); } catch (e) {}
}
Object.defineProperty(F34, "constructor", { enumerable: true, value: runString });
new F34(v28, f29, v33, F34);
gc();
