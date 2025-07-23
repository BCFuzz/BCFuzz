class C0 {
}
const v1 = new C0();
const v2 = v1.propertyIsEnumerable();
const v4 = new BigInt64Array(v1, v2);
v4.constructor = v2;
function f5() {
    return v4.subarray();
}
try { f5(); } catch (e) {}
for (let i10 = 0, i11 = 10; i10 < i11; i11--) {
}
gc();
