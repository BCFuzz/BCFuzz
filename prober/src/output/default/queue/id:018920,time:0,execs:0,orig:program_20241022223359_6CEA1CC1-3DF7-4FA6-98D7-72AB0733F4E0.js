const o3 = {
    "maxByteLength": 255,
};
const v5 = new SharedArrayBuffer(0, o3);
v5.grow(4);
const v8 = new Uint16Array(v5);
function f9(a10, a11) {
    return 0;
}
function f12(a13) {
    return v8;
}
f9[Symbol.species] = f12;
v8.constructor = f9;
v8.slice();
for (let i19 = 0, i20 = 10; i20--, i19 < i20;) {
}
gc();
