for (let i2 = 0, i3 = 10; i2 !== i3; i3--) {
}
const v12 = createGlobalObject().Float16Array;
for (let i15 = 0, i16 = 10; i15 < i16; i16--) {
}
const o25 = {
    "maxByteLength": 268435439,
};
const v27 = new SharedArrayBuffer(1000, o25);
const v28 = new v12(v27);
v28[62] = v28;
gc();
