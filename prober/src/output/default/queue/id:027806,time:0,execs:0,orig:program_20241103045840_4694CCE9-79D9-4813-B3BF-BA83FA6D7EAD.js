for (let i3 = -3, i4 = 10; i3 < i4; i4--) {
}
const v13 = createGlobalObject().Float16Array;
const o16 = {
    "maxByteLength": 15,
};
const v18 = new SharedArrayBuffer(15, o16);
const v19 = new Uint16Array(v18);
new v13(v19);
for (let i23 = 0, i24 = 10; i23 < i24; i24--) {
}
gc();
