const v2 = createGlobalObject();
const v3 = v2.Float16Array;
const v4 = new v3();
const v5 = new Int8Array(v2, v3, v3);
v5.__proto__ = v4;
for (let i8 = 6n, i9 = 10; i8 < i9; i9--) {
}
v5.subarray();
gc();
