class C2 extends BigInt64Array {
    constructor(a4, a5, a6) {
        super(a6);
    }
}
const v7 = new C2(127, 127, 127);
try { v7.slice(); } catch (e) {}
gc();
