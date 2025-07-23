const v1 = new Float64Array();
const v2 = v1.constructor;
const v4 = new SharedArrayBuffer(v2);
const v6 = new Uint16Array(v4);
const v7 = new v2(v4);
v7.set(v6);
for (let i11 = 0, i12 = 10; i11 < i12; i12--) {
}
gc();
