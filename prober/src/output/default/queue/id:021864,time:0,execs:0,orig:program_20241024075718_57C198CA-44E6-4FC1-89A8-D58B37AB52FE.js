const o4 = {
    "maxByteLength": 255,
};
const v6 = new SharedArrayBuffer(0, o4);
v6.grow(4);
const v9 = new Uint16Array(v6);
function f10(a11, a12) {
    return a12;
}
f10[Symbol.species] = Float64Array;
v9.constructor = f10;
v9.slice();
for (let i18 = 0, i19 = 10; i19--, i18 < i19;) {
}
gc();
