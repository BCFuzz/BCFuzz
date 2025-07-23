function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    class C8 {
        constructor(a10) {
            a10[Symbol.toPrimitive] = Symbol;
            ("c" + 50359) + a10;
        }
    }
    try { new C8(this); } catch (e) {}
}
new F0();
gc();
