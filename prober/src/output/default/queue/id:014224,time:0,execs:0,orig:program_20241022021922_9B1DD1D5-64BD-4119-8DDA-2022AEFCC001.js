function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v3 = Symbol.constructor;
    function f4(a5, a6) {
        return F0;
    }
    Object.defineProperty(v3, 0, { enumerable: true, get: f4, set: f4 });
    for (let i9 = 0, i10 = 10; i9 < i10; i10--) {
    }
}
new F0();
class C19 {
    constructor(a21, a22, a23, a24) {
        const v25 = this.constructor;
        try { new v25(0); } catch (e) {}
        super[a21];
    }
}
new C19();
gc();
