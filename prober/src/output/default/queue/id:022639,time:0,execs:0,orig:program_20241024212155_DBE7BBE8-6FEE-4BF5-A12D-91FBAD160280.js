const v2 = new Float32Array(178);
const t1 = createGlobalObject().Float16Array;
const v7 = new t1(8);
const v8 = v7.toSorted();
v8[2] = v8;
for (let i11 = 0, i12 = 10; i11 < i12; i12--) {
}
const v19 = v8.toString();
v2.toLocaleString().indexOf(v19);
gc();
