function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
class C3 {
    constructor(a5, a6, a7) {
        class C8 {
        }
        const v9 = new C8();
        gc.apply(v9, arguments);
    }
}
new C3(F0, WeakSet);
gc();
