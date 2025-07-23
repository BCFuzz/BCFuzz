class C1 extends Date {
}
const v2 = new C1();
function F3() {
    if (!new.target) { throw 'must be called with new'; }
    v2.getYear();
}
const v6 = new F3();
const v7 = v6.constructor;
new v7(v7, v7, v7, C1);
gc();
