const v1 = new Int8Array();
for (let i5 = 0, i6 = 10; i5 < i6; i6--) {
}
const v13 = v1.constructor;
v13.__proto__ = Int16Array;
const v14 = new v13();
v14.subarray(v13, Int8Array, v14);
gc();
