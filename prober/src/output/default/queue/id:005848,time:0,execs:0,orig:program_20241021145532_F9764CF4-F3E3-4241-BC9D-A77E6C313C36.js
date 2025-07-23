class C0 {
    constructor(a2, a3) {
        a3++;
    }
    valueOf(a6, a7) {
        this >>> a7;
    }
}
const v9 = new C0();
const v10 = new C0();
const v11 = v10.constructor;
try { new v11(C0, v9); } catch (e) {}
gc();
