const v2 = createGlobalObject().Float16Array;
const v3 = new v2();
const v5 = new Int16Array(v3);
v5.__proto__ = v3;
for (let i8 = 6n, i9 = 10; i8 < i9; i9--) {
}
v5.subarray(v2);
gc();
