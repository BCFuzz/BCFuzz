class C0 {
}
const v1 = new C0();
function f2(a3) {
    const v5 = new ArrayBuffer();
    v5.transferToFixedLength();
    const v8 = new BigUint64Array(v5);
    return v8;
}
v1.constructor = f2;
const v9 = v1.constructor;
try { v9(); } catch (e) {}
gc();
