for (let i2 = 0, i3 = 10; i3--, i2 < i3;) {
}
const o12 = {
    "maxByteLength": 757,
};
const v14 = new ArrayBuffer(757, o12);
const v17 = new Uint32Array(v14);
const o23 = {
    o(a19, a20, a21) {
        new Int8Array(a19);
        return a21;
    },
};
o23.o(v17);
gc();
