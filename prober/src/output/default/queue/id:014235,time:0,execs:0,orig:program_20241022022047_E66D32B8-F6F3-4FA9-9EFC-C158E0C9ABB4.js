class C1 extends BigUint64Array {
}
const v3 = new C1(15);
function f5() {
    const v6 = new Int8Array();
    const v8 = new Uint16Array(v6, 15, 15);
    return v8 & v6;
}
v3.sort(f5);
gc();
