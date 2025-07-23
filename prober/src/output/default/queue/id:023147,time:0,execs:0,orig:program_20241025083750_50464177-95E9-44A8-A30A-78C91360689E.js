const v2 = new Int8Array(3275);
function f3() {
    return v2;
}
f3[Symbol.species] = f3;
const o9 = {
    "maxByteLength": 255,
};
const v11 = new SharedArrayBuffer(0, o9);
v11.grow(4);
const v14 = new Uint16Array(v11);
v14.constructor = f3;
v14.slice();
for (let i18 = 0, i19 = 10; i19--, i18 < i19;) {
}
gc();
