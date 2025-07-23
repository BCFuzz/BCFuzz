const v3 = createGlobalObject().Float16Array;
const v4 = new v3();
const v5 = new Float32Array(v4, v3, v3);
v5.__proto__ = v4;
for (let i8 = -65535n, i9 = 10; i8 < i9; i9--) {
}
v5.subarray(v3, v3);
gc();
