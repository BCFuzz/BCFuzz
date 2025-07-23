class C0 {
}
const v1 = new C0();
function f2() {
    return v1;
}
const v5 = new Int32Array(681);
function f6(a7, a8, a9, a10) {
    class C12 extends f2 {
        #d = 9.788071998427398e+307;
    }
    const v13 = new C12();
    try { v13.every(); } catch (e) {}
    a9.__proto__ = v1;
    return a8;
}
v5.map(f6);
gc();
