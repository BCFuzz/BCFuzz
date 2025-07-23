const v2 = new Float32Array(178);
v2[79] = v2;
const v5 = createGlobalObject().Float16Array;
const v7 = new v5(8);
const v8 = v7.toSorted();
v8[2] = v8;
for (let i11 = 0, i12 = 10; i11 < i12; i12--) {
}
const v19 = v8.toString(v5, createGlobalObject);
v2.toLocaleString().indexOf(v19);
gc();
