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
    const v7 = new BigInt64Array();
    v7["slice"](v5);
    return v7;
}
C3.toString = f4;
const v10 = new C3();
const t16 = v10.constructor;
const v12 = t16();
const v13 = new C3();
const v14 = v13.constructor;
const v15 = v14();
try { v14(v15, v12, C3, v15); } catch (e) {}
gc();
