class C0 {
    constructor(a2, a3, a4, a5) {
        const v6 = super.valueOf();
        v6[5] = v6;
        const t4 = v6[5];
        t4[Symbol.toPrimitive] = Symbol;
    }
}
const v10 = new C0();
v10.length = v10;
const v13 = createGlobalObject().Float16Array;
try { new v13(v10); } catch (e) {}
gc();
