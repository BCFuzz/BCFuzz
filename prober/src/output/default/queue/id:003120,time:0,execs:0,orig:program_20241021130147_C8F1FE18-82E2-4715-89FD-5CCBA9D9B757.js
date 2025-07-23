function f0() {
    return f0;
}
class C1 extends f0 {
    constructor(a3) {
        class C4 {
        }
        try { C4.call(); } catch (e) {}
        for (let v6 = 0; v6 < 50; v6++) {
        }
        super();
    }
}
new C1(C1);
new C1(C1);
new C1();
gc();
