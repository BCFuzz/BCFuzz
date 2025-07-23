function f0(a1, a2) {
    const o3 = {
    };
    function f4() {
        return f0;
    }
    Object.defineProperty(o3, Symbol.toStringTag, { configurable: true, get: f4 });
    return o3;
}
const v7 = f0(f0, f0);
class C8 extends f0 {
    constructor(a10, a11, a12) {
        super();
        try { a10(); } catch (e) {}
    }
}
new C8(v7);
gc();
