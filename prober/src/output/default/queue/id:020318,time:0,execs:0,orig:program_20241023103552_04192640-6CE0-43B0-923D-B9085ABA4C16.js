const o2 = {
    "maxByteLength": 1073741824,
};
for (let i5 = 0, i6 = 10; i6--, i5 < i6;) {
}
const v15 = createGlobalObject().Float16Array;
const v17 = new ArrayBuffer(1622, o2);
const v18 = new v15(v17);
new Float64Array(v18);
gc();
