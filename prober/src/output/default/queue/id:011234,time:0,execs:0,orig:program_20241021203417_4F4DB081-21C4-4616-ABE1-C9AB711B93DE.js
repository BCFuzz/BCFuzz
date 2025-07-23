const v3 = createGlobalObject().Float16Array;
Float32Array[1] = 7;
const v5 = new Float32Array(Float32Array);
v3.from(v5);
for (let i9 = -3, i10 = 10; i9 < i10; i10--) {
}
gc();
