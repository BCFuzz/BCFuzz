function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
class C2 extends F0 {
    constructor(a4) {
        super();
        for (let v5 = 0; v5 < 25; v5++) {
            const v7 = new Int16Array();
            const v8 = v7[1];
            const v10 = new WeakMap();
            const v11 = v10.constructor;
            const v12 = v11.__lookupGetter__;
            try { v12(v8, F0, v7, F0); } catch (e) {}
            const v14 = new v11();
            const v15 = v14.set;
            try { v15(v8, v8); } catch (e) {}
            for (let v17 = 0; v17 < 100; v17++) {
            }
        }
    }
}
new C2(F0);
gc();
