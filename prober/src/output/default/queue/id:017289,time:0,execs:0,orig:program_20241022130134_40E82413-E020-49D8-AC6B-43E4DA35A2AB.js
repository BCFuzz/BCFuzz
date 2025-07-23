for (let i2 = 0, i3 = 10; i2 !== i3; i3--) {
}
const v12 = createGlobalObject().Float16Array;
const o15 = {
    "maxByteLength": 268435439,
};
const v17 = new SharedArrayBuffer(1000, o15);
const v18 = new v12(v17);
v18.byteLength;
gc();
