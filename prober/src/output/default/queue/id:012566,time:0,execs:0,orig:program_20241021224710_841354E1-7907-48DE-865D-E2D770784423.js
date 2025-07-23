class C1 {
}
const v2 = new C1();
const v4 = new SharedArrayBuffer();
function f5(a6, a7) {
    return 5.0;
}
v4[Symbol.toPrimitive] = f5;
try { new BigInt64Array(v4, v4, v2); } catch (e) {}
gc();
