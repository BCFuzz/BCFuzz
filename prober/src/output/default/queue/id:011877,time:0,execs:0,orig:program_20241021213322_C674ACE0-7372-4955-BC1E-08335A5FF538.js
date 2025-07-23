function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 536870912;
    this.b = 536870912;
}
new F0();
new F0();
class C5 extends F0 {
    set b(a7) {
    }
}
new C5();
for (let v9 = 0; v9 < 250; v9++) {
}
gc();
