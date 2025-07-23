function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = -3;
}
function f5(a6, a7, a8) {
    class C9 extends F1 {
        4294967295;
    }
    new C9();
    new C9();
    const v12 = new C9();
    return v12;
}
const v13 = f5();
f5();
f5(-3, F1, v13);
gc();
