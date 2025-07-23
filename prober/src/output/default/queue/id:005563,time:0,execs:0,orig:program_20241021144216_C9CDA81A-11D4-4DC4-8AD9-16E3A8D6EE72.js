class C0 {
    static set b(a2) {
        Object.defineProperty(this, 2276664664, { configurable: true, get: fullGC });
    }
    constructor() {
        for (let i7 = 0, i8 = 10; i7 < i8; i8--) {
            eval(C0);
        }
    }
}
const v17 = new C0();
const o18 = {
    __proto__: C0,
};
C0.b = v17;
gc();
