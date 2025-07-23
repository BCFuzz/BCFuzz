class C0 {
    static set b(a2) {
        fullGC();
        Object.defineProperty(this, 2276664664, { configurable: true, get: fullGC });
    }
    constructor() {
        for (let i8 = 0, i9 = 10; i8 < i9; i9--) {
        }
    }
}
const v16 = new C0();
const o17 = {
    __proto__: C0,
};
C0.b = v16;
gc();
