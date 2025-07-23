const v2 = createGlobalObject().Float16Array;
let v3 = 8;
v3++;
const v5 = new v2(v3);
v5[8] = v5;
for (let i8 = 0, i9 = 10; i8 < i9; i9--) {
}
new Int32Array(v5);
gc();
