const o3 = {
    "maxByteLength": 255,
};
const v5 = new SharedArrayBuffer(0, o3);
v5.grow(4);
const v8 = new Uint16Array(v5);
v8.slice();
for (let i12 = 0, i13 = 10; i13--, i12 < i13;) {
}
gc();
