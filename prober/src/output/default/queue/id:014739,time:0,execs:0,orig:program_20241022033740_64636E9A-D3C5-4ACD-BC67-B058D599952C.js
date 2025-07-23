function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
class C2 extends F0 {
    constructor(a4, a5) {
        for (let i10 = 0, i11 = 10 + 10; i11--, i11;) {
            const v19 = createGlobalObject().Atomics;
            const v20 = v19.isLockFree(2728);
            try { v19.load(v20); } catch (e) {}
            for (let v22 = 0; v22 < 100; v22++) {
            }
        }
        super();
    }
}
new C2();
for (let i26 = 0, i27 = 10; i26 < i27; i27--) {
}
gc();
