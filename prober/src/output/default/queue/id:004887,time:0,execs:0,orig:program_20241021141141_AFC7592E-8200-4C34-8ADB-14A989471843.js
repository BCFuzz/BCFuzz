class C1 {
    static p(a3) {
    }
    268435439;
    static #h = "symbol";
}
const v4 = new C1();
const v5 = new C1();
const v6 = new C1();
function F7(a9, a10, a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    const v13 = this?.constructor;
    try { new v13(a10, a11, F7); } catch (e) {}
    a9.c = a9;
}
new F7(v6, v6, C1);
new F7(v5, v4, v4);
new F7(v4);
gc();
