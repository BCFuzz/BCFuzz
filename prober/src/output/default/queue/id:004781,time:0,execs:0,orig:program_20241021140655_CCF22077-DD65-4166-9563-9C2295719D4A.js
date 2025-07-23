function f0() {
    return f0;
}
class C1 {
    p() {
        Object.defineProperty(C1, 1, { writable: true, configurable: true, set: f0 });
    }
}
const v3 = new C1();
class C4 extends C1 {
    static {
        f0 ^= f0;
    }
    constructor(a7, a8) {
        super();
        try { v3.p(); } catch (e) {}
    }
}
new C4(C1, f0);
gc();
