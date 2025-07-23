class C0 {
}
const v1 = new C0();
function f2(a3, a4) {
    return a4;
}
v1[Symbol.iterator] = f2;
try { new BigInt64Array(v1); } catch (e) {}
gc();
