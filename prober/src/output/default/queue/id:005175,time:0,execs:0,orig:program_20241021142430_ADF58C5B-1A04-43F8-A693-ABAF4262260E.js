function f0() {
    return f0;
}
class C1 extends f0 {
    constructor(a3, a4) {
        super();
        Promise.all([4]);
    }
}
new C1();
new C1(C1, f0);
gc();
