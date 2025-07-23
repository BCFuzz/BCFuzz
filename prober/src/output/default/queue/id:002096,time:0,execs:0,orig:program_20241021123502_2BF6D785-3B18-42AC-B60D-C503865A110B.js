const v1 = new BigUint64Array();
class C3 {
    constructor(a5, a6, a7) {
        a5.from(v1);
    }
}
try { new C3(Uint16Array); } catch (e) {}
gc();
