class C0 {
}
const v1 = new C0();
function f2() {
    return f2;
}
class C3 extends f2 {
}
function f4() {
    const v5 = v1.indexOf;
    const v7 = new BigInt64Array(v1, v5, v5);
    v7["slice"]().set(v5);
    return C3;
}
C3.toString = f4;
const v11 = new C3();
const t16 = v11.constructor;
const v13 = t16();
const v14 = new C3();
const v15 = v14.constructor;
const v16 = v15();
try { v15(v16, v13, C3); } catch (e) {}
gc();
