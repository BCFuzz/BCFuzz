class C0 {
    constructor(a2, a3) {
        const v4 = this.__lookupGetter__;
        let v5;
        try { v5 = v4(); } catch (e) {}
        try { a2.call(); } catch (e) {}
        try { a3(this, v5, v5); } catch (e) {}
        for (let i = 0; i < 10; i++) {
            const v10 = new WeakSet();
            const v12 = new Uint16Array();
            try { v12.set(v10, 9007199254740991); } catch (e) {}
            const v16 = new Int32Array(255);
            for (const v17 in v16) {
            }
        }
    }
}
new C0(C0, C0);
gc();
