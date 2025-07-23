const v2 = createGlobalObject();
const v3 = v2.Float16Array;
const v4 = new v3(v3, v2, v3, v2, Int32Array);
const v5 = new Int32Array();
v5.__proto__ = v4;
for (let i8 = -65535n, i9 = 10; i8 < i9; i9--) {
}
v5.subarray(v3);
gc();
