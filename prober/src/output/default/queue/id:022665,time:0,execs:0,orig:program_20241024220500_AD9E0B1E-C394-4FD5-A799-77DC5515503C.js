const v2 = new Int32Array(2647);
for (let i5 = 0, i6 = 10; i5 < i6; i6--) {
}
const o16 = {
    "maxByteLength": 416,
};
const v18 = new SharedArrayBuffer(116, o16);
const v19 = new Float64Array(v18);
function f20(a21, a22) {
    return a22;
}
function f23() {
    return v2;
}
f20[Symbol.species] = f23;
v19.constructor = f20;
v19.slice();
gc();
