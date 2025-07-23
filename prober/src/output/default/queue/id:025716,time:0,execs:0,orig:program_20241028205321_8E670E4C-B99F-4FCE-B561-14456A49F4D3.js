const v1 = new Uint16Array();
for (let i5 = 0, i6 = 10; i5 < i6; i6--) {
}
const v13 = v1.constructor;
v13.__proto__ = Int16Array;
const v14 = new v13();
v14.subarray();
gc();
