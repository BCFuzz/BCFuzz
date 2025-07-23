function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a4;
}
new F0();
class C7 extends F0 {
    set a(a9) {
        new F0();
        for (let v11 = 0; v11 < 50; v11++) {
        }
    }
}
new C7();
new C7();
gc();
