class C0 {
    constructor(a2, a3) {
        let v4;
        try { v4 = a2(); } catch (e) {}
        const v5 = a2.__defineSetter__;
        try { v5.constructor(v5); } catch (e) {}
        try { v5(a2, C0, a2, a2, this); } catch (e) {}
        const v8 = this.__lookupGetter__;
        try { v8(v4, v5, v8); } catch (e) {}
        try { a2.call(); } catch (e) {}
        try { a3(); } catch (e) {}
        for (let i = 0; i < 10; i++) {
            const v14 = new WeakSet();
            const v16 = new Uint16Array(this, v4, a3);
            try { v16.set(v14, 9007199254740991); } catch (e) {}
            try { Int32Array(C0, 9007199254740991, a3); } catch (e) {}
            const v21 = new Int32Array(255);
            for (const v22 in v21) {
            }
        }
    }
}
new C0(C0);
gc();
