class C0 {
    constructor(a2, a3) {
        const v4 = a2.__defineSetter__;
        try { v4(); } catch (e) {}
        const v6 = this.__lookupGetter__;
        try { v6(); } catch (e) {}
        try { a2.call(C0, C0, a2, v6, C0); } catch (e) {}
        try { a3(); } catch (e) {}
        for (let i = 0; i < 10; i++) {
            const v12 = new WeakSet();
            const v14 = new Uint16Array();
            try { v14.set(v12, 9007199254740991); } catch (e) {}
            try { Int32Array(); } catch (e) {}
            const v19 = new Int32Array(255);
            for (const v20 in v19) {
            }
        }
    }
}
new C0(C0);
gc();
