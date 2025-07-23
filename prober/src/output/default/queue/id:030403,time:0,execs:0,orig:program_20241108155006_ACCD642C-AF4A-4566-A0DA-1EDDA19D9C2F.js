const v2 = createGlobalObject();
const t1 = v2.Float16Array;
const v4 = new t1();
const v5 = new Float64Array(v2);
v5.__proto__ = v4;
for (let i8 = 6n, i9 = 10; i8 < i9; i9--) {
}
v5.subarray();
gc();
